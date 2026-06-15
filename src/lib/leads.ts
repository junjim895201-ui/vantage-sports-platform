import type { Locale } from "../i18n/types";

export type LeadType = "contact" | "distributor" | "testing";

export type LeadStatus = "new" | "reviewing" | "qualified" | "closed";

export type LeadRecord = {
  id: string;
  type: LeadType;
  locale: Locale;
  sourcePath: string;
  submittedAt: string;
  status: LeadStatus;
  data: Record<string, string>;
};

const STORAGE_KEY = "vantage-sports-leads-v1";

function readStore(): LeadRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStore(leads: LeadRecord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function captureFormData(form: HTMLFormElement): Record<string, string> {
  const data: Record<string, string> = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    data[key] = String(value);
  });
  return data;
}

type SaveLeadInput = {
  type: LeadType;
  locale: Locale;
  sourcePath: string;
  data: Record<string, string>;
};

export function saveLead(input: SaveLeadInput): LeadRecord {
  const lead: LeadRecord = {
    id: crypto.randomUUID(),
    type: input.type,
    locale: input.locale,
    sourcePath: input.sourcePath,
    submittedAt: new Date().toISOString(),
    status: "new",
    data: input.data,
  };
  const leads = readStore();
  leads.unshift(lead);
  writeStore(leads);
  return lead;
}

export function getLeads(): LeadRecord[] {
  return readStore();
}

export function getLeadsByType(type: LeadType): LeadRecord[] {
  return readStore().filter((l) => l.type === type);
}

export function getLeadStats() {
  const leads = readStore();
  return {
    total: leads.length,
    contact: leads.filter((l) => l.type === "contact").length,
    distributor: leads.filter((l) => l.type === "distributor").length,
    testing: leads.filter((l) => l.type === "testing").length,
    new: leads.filter((l) => l.status === "new").length,
  };
}

export function exportLeadsJson(): string {
  return JSON.stringify(readStore(), null, 2);
}

export function updateLeadStatus(id: string, status: LeadStatus): void {
  const leads = readStore().map((l) => (l.id === id ? { ...l, status } : l));
  writeStore(leads);
}

export const LEAD_STORAGE_KEY = STORAGE_KEY;
