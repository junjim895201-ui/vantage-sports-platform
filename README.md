# Badminton SEA

Southeast Asia B2B badminton partnership platform — helping Chinese factories (INFIV, VENSON, OEM partners) develop distributors, clubs, and OEM clients in Thailand, Malaysia, Philippines, and Vietnam.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS**
- **ESLint** + **Prettier**
- **react-router-dom**

## Scripts

```bash
npm install
npm run dev          # local dev server
npm run build        # production build → dist/
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check
npm run preview      # preview production build
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/products` | Products |
| `/oem-manufacturing` | OEM Manufacturing |
| `/distributor-program` | Distributor Program |
| `/shuttle-testing` | Free Shuttle Testing |
| `/market-coverage` | Market Coverage |
| `/about` | About Us |
| `/contact` | Contact |

## Configuration

Edit `src/content/en.ts` for copy and contact details.

## Deploy

Vercel-ready via `vercel.json` SPA rewrites. Push to Git and import in Vercel, or run `npx vercel --prod`.
