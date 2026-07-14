# VoltArc Electrical

Professional website for VoltArc Electrical — a licensed electrical contractor serving the Austin, TX metro area.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Configuration

All site content is configured in `src/data/electrician.ts`. Change the data file to update the entire site.

### Environment Variables (Optional)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`) |

## Project Structure

```
src/
├── app/              # Route pages (App Router)
│   ├── page.tsx      # Homepage (landing page)
│   ├── about/        # About page
│   ├── services/     # Services listing
│   ├── gallery/      # Project gallery
│   ├── contact/      # Contact form + map
│   ├── sitemap.ts    # Dynamic sitemap
│   ├── robots.ts     # Robots.txt
│   ├── not-found.tsx # 404 page
│   ├── error.tsx     # Error boundary
│   └── loading.tsx   # Loading state
├── components/       # Shared components (Navbar, ContactForm, FadeIn)
├── sections/         # Homepage section components
├── data/             # Site configuration data
└── types/            # TypeScript type definitions
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm run start
```
