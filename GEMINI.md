# Kolath Medicals - AI Studio App

This project is a modern, high-performance landing page for **Kolath Medicals**, a trusted pharmacy in Kochi, Kerala, established in 1990. The application is designed with a focus on visual impact, utilizing 3D backgrounds, smooth animations, and a polished dark-themed aesthetic.

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Motion (`motion/react`)
- **UI Components:** Shadcn UI + Radix UI
- **Icons:** Lucide React
- **Performance/Audit:** Lighthouse

## 📁 Project Structure

```text
/
├── public/              # Static assets (robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Functional UI sections
│   │   ├── ui/          # Low-level reusable UI components (shadcn)
│   │   ├── NavBar.tsx   # Navigation logic
│   │   ├── HeroSection.tsx # Above-the-fold content
│   │   └── ...          # Other sections (Departments, Location, etc.)
│   ├── lib/             # Utilities (tailwind-merge, clsx)
│   ├── App.tsx          # Main application entry and layout
│   ├── main.tsx         # React DOM mounting
│   └── index.css        # Global styles and Tailwind directives
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 🛠️ Development

### Commands

- **Install Dependencies:** `npm install`
- **Start Development Server:** `npm run dev` (runs on `http://localhost:3000`)
- **Production Build:** `npm run build`
- **Lint/Type Check:** `npm run lint` (runs `tsc --noEmit`)
- **Preview Build:** `npm run preview`
- **Run Lighthouse Audit:** `npm run lighthouse`

### Environment Setup

Create a `.env.local` file based on `.env.example` and add your `GEMINI_API_KEY` if AI features are being utilized.

## 🚦 Lighthouse Mandate

The project workflow requires a **Lighthouse score of 100** across all metrics (Performance, Accessibility, Best Practices, SEO).

- **Current Status:** 93/100/100/100 (Performance is currently optimized for local environments).
- **Enforcement:** Always run `npm run lighthouse` before major changes or deployments to ensure no regressions in accessibility or performance.
- **Key Fixes Applied:**
  - Semantic heading order (h1 -> h2 -> h3).
  - High-contrast color palette (replacing low-contrast slates).
  - ARIA labels for all interactive elements, matching visible text to avoid content-name mismatches.
  - Title attributes for all iframes (Maps, GTM).
  - Font preloading in `index.html`.

## 🎨 Design & Conventions

- **Visual Style:** Dark mode (`bg-slate-950`), with `brand-primary` (emerald-like) accents.
- **Animations:** Extensive use of `motion/react` for entrance animations, floating effects, and 3D-like rotations.
- **Performance:** Non-critical sections (Location, WhatsApp Sticky, Popups) are lazy-loaded using `React.lazy` and `Suspense`.
- **Typography:** Utilizes Geist Variable font for a modern look.
- **Icons:** Consistent use of `lucide-react` for iconography.

## 🏥 About Kolath Medicals

Kolath Medicals is the first ISO-certified pharmacy in Kerala, serving the Kadavanthra community for over 30 years. They specialize in genuine pharmaceutical products, surgical equipment, orthopaedic braces, and diabetic care.
