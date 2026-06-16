#!/usr/bin/env python3
"""Phase 6C — Authentic factory photo enhancement (no AI-generated imagery)."""

from __future__ import annotations

import json
import os
import subprocess
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

REPO = Path(__file__).resolve().parents[1]
ASSET_ROOT = Path.home() / "VANTAGE_FACTORY_ASSETS"
OUT_ENHANCED = REPO / "public/media/phase6c/enhanced"
OUT_COMPARE = REPO / "public/media/phase6c/comparisons"
OUT_ORIGINALS_BACKUP = REPO / "public/media/phase6c/originals"
DEPLOY_DIR = REPO / "public/media/phase6b/real-assets"


@dataclass
class Region:
    """Normalized rectangle (0–1) for retouch masks."""

    x0: float
    y0: float
    x1: float
    y1: float
    feather: int = 24


@dataclass
class BrandingSpec:
    lines: list[str]
    position: str  # top-left | bottom-right | center-left
    opacity: int = 170


@dataclass
class AssetSpec:
    output_name: str
    source_rel: str
    max_edge: int
    orientation: str  # landscape | portrait
    sky_enhance: bool = False
    heal_regions: list[Region] = field(default_factory=list)
    snow_roof: bool = False
    brighten_interior: bool = False
    branding: BrandingSpec | None = None


ASSETS: list[AssetSpec] = [
    AssetSpec(
        "hero_campus_aerial_15.webp",
        "02_DRONE/Campus_View/无人机视频(15).jpg",
        2400,
        "landscape",
        sky_enhance=True,
        snow_roof=True,
        heal_regions=[
            Region(0.0, 0.72, 0.22, 1.0),  # bottom-left snow/debris
            Region(0.55, 0.68, 0.78, 0.92),  # scissor lift zone
            Region(0.18, 0.78, 0.38, 0.98),  # temp container
            Region(0.62, 0.82, 0.95, 0.98),  # parking clutter
            Region(0.0, 0.58, 0.15, 0.75),  # left base debris
        ],
        branding=BrandingSpec(
            ["INFIV", "Manufacturing Center"],
            "bottom-right",
        ),
    ),
    AssetSpec(
        "campus_aerial_10.webp",
        "02_DRONE/Campus_View/无人机视频(10).jpg",
        2400,
        "landscape",
        sky_enhance=True,
        snow_roof=True,
        heal_regions=[
            Region(0.0, 0.78, 0.45, 1.0),  # foreground dirt/snow
            Region(0.55, 0.75, 0.95, 1.0),  # right foreground piles
            Region(0.35, 0.62, 0.55, 0.78),  # mid-ground construction patch
        ],
        branding=BrandingSpec(
            ["INFIV", "Manufacturing Center"],
            "bottom-left",
        ),
    ),
    AssetSpec(
        "factory_aerial_5.webp",
        "02_DRONE/Factory_Aerial/无人机视频(5).jpg",
        2400,
        "landscape",
        sky_enhance=True,
        snow_roof=True,
        heal_regions=[
            Region(0.0, 0.0, 0.28, 0.35),  # top-left construction
            Region(0.72, 0.0, 1.0, 0.28),  # top-right snow piles
            Region(0.78, 0.82, 1.0, 1.0),  # bottom-right temp shacks
            Region(0.0, 0.82, 0.25, 1.0),  # bottom-left clutter
        ],
        branding=BrandingSpec(
            ["INFIV", "OEM Partner"],
            "top-left",
        ),
    ),
    AssetSpec(
        "factory_building_02089.webp",
        "01_FACTORY/Factory_Building/DSC02089.JPG",
        2000,
        "portrait",
        sky_enhance=True,
        heal_regions=[
            Region(0.0, 0.82, 0.45, 1.0),  # snow at tree base
            Region(0.55, 0.88, 0.95, 1.0),  # right foreground snow
        ],
        branding=BrandingSpec(
            ["INFIV", "Manufacturing Center"],
            "bottom-left",
        ),
    ),
    AssetSpec(
        "factory_building_02007.webp",
        "01_FACTORY/Factory_Building/DSC02007.JPG",
        2000,
        "portrait",
        brighten_interior=True,
        heal_regions=[
            Region(0.0, 0.0, 1.0, 0.22),  # ceiling tile irregularities
            Region(0.72, 0.08, 0.98, 0.28),  # red banner area — neutralize
        ],
        branding=BrandingSpec(
            ["INFIV", "OEM Partner"],
            "top-right",
        ),
    ),
    AssetSpec(
        "factory_workers_02084.webp",
        "01_FACTORY/Workers/DSC02084.JPG",
        2000,
        "landscape",
        brighten_interior=True,
        heal_regions=[
            Region(0.0, 0.88, 0.18, 1.0),  # floor cable clutter
            Region(0.0, 0.0, 0.12, 0.18),  # foreground box corner
            Region(0.88, 0.0, 1.0, 0.15),  # foreground box corner
        ],
        branding=BrandingSpec(
            ["INFIV", "Manufacturing Center"],
            "center-left",
        ),
    ),
    AssetSpec(
        "factory_workers_02082.webp",
        "01_FACTORY/Workers/DSC02082.JPG",
        2000,
        "landscape",
        heal_regions=[
            Region(0.0, 0.0, 0.08, 0.12),  # tape on box edge
            Region(0.92, 0.0, 1.0, 0.15),  # flap scuff
        ],
        branding=BrandingSpec(
            ["INFIV", "OEM Partner"],
            "bottom-right",
        ),
    ),
]


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                continue
    return ImageFont.load_default()


def resize_for_web(img: Image.Image, max_edge: int, orientation: str) -> Image.Image:
    w, h = img.size
    if orientation == "landscape":
        if w >= h:
            nw = min(w, max_edge)
            nh = int(h * (nw / w))
        else:
            nh = min(h, max_edge)
            nw = int(w * (nh / h))
    else:
        nh = min(h, max_edge)
        nw = int(w * (nh / h))
    return img.resize((nw, nh), Image.Resampling.LANCZOS)


def region_to_mask(size: tuple[int, int], regions: list[Region]) -> Image.Image:
    w, h = size
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for r in regions:
        box = (int(r.x0 * w), int(r.y0 * h), int(r.x1 * w), int(r.y1 * h))
        draw.rectangle(box, fill=255)
    if regions:
        mask = mask.filter(ImageFilter.GaussianBlur(max(r.feather for r in regions)))
    return mask


def border_mean_color(img: Image.Image, mask: Image.Image) -> tuple[int, int, int]:
    """Sample mean RGB from unmasked ring around clutter masks."""
    arr = np.array(img.convert("RGB"))
    m = np.array(mask)
    ring = (m > 32) & (m < 200)
    if not ring.any():
        ring = m < 64
    pixels = arr[ring]
    if len(pixels) == 0:
        return (160, 158, 154)
    mean = pixels.mean(axis=0).astype(int)
    return int(mean[0]), int(mean[1]), int(mean[2])


def heal_regions(img: Image.Image, regions: list[Region]) -> Image.Image:
    """Blend clutter areas with color-matched texture (authentic retouch, not generative)."""
    if not regions:
        return img
    mask = region_to_mask(img.size, regions)
    fill_rgb = border_mean_color(img, mask)
    texture = img.filter(ImageFilter.GaussianBlur(18))
    tint = Image.new("RGB", img.size, fill_rgb)
    texture = Image.blend(texture, tint, 0.35)
    texture = texture.filter(ImageFilter.GaussianBlur(6))
    return Image.composite(texture, img, mask)


def reduce_roof_snow(img: Image.Image) -> Image.Image:
    arr = np.array(img.convert("RGB")).astype(np.float32)
    h, w, _ = arr.shape
    brightness = arr.mean(axis=2)
    # Bright flat roof patches
    roof_mask = (brightness > 210) & (np.abs(arr[:, :, 0] - arr[:, :, 1]) < 18)
    roof_mask[: int(h * 0.15), :] = False  # exclude sky
    if not roof_mask.any():
        return img
    # Tint toward neutral industrial roof tone
    target = np.array([178, 176, 172], dtype=np.float32)
    alpha = 0.55
    for c in range(3):
        arr[:, :, c] = np.where(
            roof_mask,
            arr[:, :, c] * (1 - alpha) + target[c] * alpha,
            arr[:, :, c],
        )
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def enhance_sky(img: Image.Image) -> Image.Image:
    w, h = img.size
    arr = np.array(img.convert("RGB")).astype(np.float32)
    y_idx = np.linspace(0, 1, h)[:, None]
    sky_weight = np.clip(1.4 - y_idx * 2.2, 0, 1)
    sky_weight = np.broadcast_to(sky_weight, (h, w))

    # Commercial-grade sky gradient overlay
    top_color = np.array([72, 132, 198], dtype=np.float32)
    horizon_color = np.array([196, 214, 232], dtype=np.float32)
    gradient = np.zeros_like(arr)
    for y in range(h):
        t = min(1.0, y / (h * 0.42))
        gradient[y, :] = top_color * (1 - t) + horizon_color * t

    blend = 0.38 * sky_weight[..., None]
    arr = arr * (1 - blend) + gradient * blend

    # Lift haze in sky band
    arr[:, :, :] = np.where(
        sky_weight[..., None] > 0.2,
        np.clip(arr * 1.06 + 8, 0, 255),
        arr,
    )
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def commercial_grade(img: Image.Image, interior: bool = False) -> Image.Image:
    img = ImageOps.autocontrast(img, cutoff=1)
    if interior:
        img = ImageEnhance.Brightness(img).enhance(1.08)
        img = ImageEnhance.Color(img).enhance(0.92)
    else:
        img = ImageEnhance.Color(img).enhance(1.12)
    img = ImageEnhance.Contrast(img).enhance(1.14)
    img = ImageEnhance.Sharpness(img).enhance(1.35)
    return img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=2))


def add_branding(img: Image.Image, spec: BrandingSpec) -> Image.Image:
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    w, h = img.size
    font_main = load_font(max(28, w // 42))
    font_sub = load_font(max(16, w // 68))

    lines = spec.lines
    line_heights = []
    for i, line in enumerate(lines):
        font = font_main if i == 0 else font_sub
        bbox = draw.textbbox((0, 0), line, font=font)
        line_heights.append(bbox[3] - bbox[1] + 6)

    block_h = sum(line_heights) + 16
    block_w = max(
        draw.textbbox((0, 0), line, font=font_main if i == 0 else font_sub)[2]
        for i, line in enumerate(lines)
    ) + 32

    margin = int(w * 0.04)
    if spec.position == "top-left":
        x, y = margin, margin
    elif spec.position == "top-right":
        x, y = w - block_w - margin, margin
    elif spec.position == "bottom-left":
        x, y = margin, h - block_h - margin
    elif spec.position == "bottom-right":
        x, y = w - block_w - margin, h - block_h - margin
    else:  # center-left
        x, y = margin, (h - block_h) // 2

    draw.rounded_rectangle(
        (x - 12, y - 10, x + block_w, y + block_h),
        radius=8,
        fill=(12, 28, 48, spec.opacity),
    )

    cy = y + 8
    for i, line in enumerate(lines):
        font = font_main if i == 0 else font_sub
        draw.text((x + 8, cy), line, font=font, fill=(245, 248, 252, 235))
        cy += line_heights[i]

    base = img.convert("RGBA")
    return Image.alpha_composite(base, overlay).convert("RGB")


def make_before_after(before: Image.Image, after: Image.Image, label: str) -> Image.Image:
    target_h = 900
    bw, bh = before.size
    scale = target_h / bh
    tw = int(bw * scale)
    b = before.resize((tw, target_h), Image.Resampling.LANCZOS)
    a = after.resize((tw, target_h), Image.Resampling.LANCZOS)
    gap = 12
    canvas = Image.new("RGB", (tw * 2 + gap * 3, target_h + 56), (18, 24, 32))
    canvas.paste(b, (gap, 40))
    canvas.paste(a, (tw + gap * 2, 40))
    draw = ImageDraw.Draw(canvas)
    font = load_font(22)
    draw.text((gap + 8, 8), "BEFORE", font=font, fill=(180, 190, 200))
    draw.text((tw + gap * 2 + 8, 8), "AFTER", font=font, fill=(120, 200, 140))
    draw.text((gap, target_h + 44), label, font=load_font(14), fill=(140, 150, 160))
    return canvas


def save_webp(img: Image.Image, path: Path, quality: int = 84) -> int:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".png")
    img.save(tmp, "PNG")
    subprocess.run(
        ["cwebp", "-q", str(quality), "-m", "6", "-af", str(tmp), "-o", str(path)],
        check=True,
        capture_output=True,
    )
    size = path.stat().st_size
    tmp.unlink(missing_ok=True)
    return size


def process_asset(spec: AssetSpec) -> dict:
    src = ASSET_ROOT / spec.source_rel
    if not src.exists():
        raise FileNotFoundError(src)

    original = Image.open(src).convert("RGB")
    before_web = resize_for_web(original, spec.max_edge, spec.orientation)

    img = before_web.copy()
    img = heal_regions(img, spec.heal_regions)
    if spec.snow_roof:
        img = reduce_roof_snow(img)
    if spec.sky_enhance:
        img = enhance_sky(img)
    img = commercial_grade(img, interior=spec.brighten_interior)
    if spec.branding:
        img = add_branding(img, spec.branding)

    enhanced_path = OUT_ENHANCED / spec.output_name
    compare_path = OUT_COMPARE / spec.output_name.replace(".webp", "_compare.webp")
    deploy_path = DEPLOY_DIR / spec.output_name

    enhanced_bytes = save_webp(img, enhanced_path)
    save_webp(make_before_after(before_web, img, spec.output_name), compare_path, quality=80)

    # Backup current deploy asset then replace
    OUT_ORIGINALS_BACKUP.mkdir(parents=True, exist_ok=True)
    if deploy_path.exists():
        backup = OUT_ORIGINALS_BACKUP / spec.output_name
        backup.write_bytes(deploy_path.read_bytes())

    deploy_path.write_bytes(enhanced_path.read_bytes())

    return {
        "name": spec.output_name,
        "source": str(spec.source_rel),
        "dimensions": f"{img.size[0]}×{img.size[1]}",
        "bytes": enhanced_bytes,
        "kb": round(enhanced_bytes / 1024),
        "sky": spec.sky_enhance,
        "branding": bool(spec.branding),
        "heal_regions": len(spec.heal_regions),
    }


def main() -> None:
    results = [process_asset(spec) for spec in ASSETS]
    manifest = {
        "phase": "6C",
        "policy": "Authentic retouch only — no synthetic factory imagery",
        "outputs": results,
    }
    manifest_path = REPO / "public/media/phase6c/manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    main()
