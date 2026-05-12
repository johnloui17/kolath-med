# Kolath Medicals - Project Context

## Project Overview
Kolath Medicals is a React-based web application for a trusted medical store and healthcare partner located in Kadavanthra, Kochi. The project provides a modern, responsive interface for patients to explore medical departments, products, and contact the store for rapid home delivery.

### Main Technologies
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### Architecture
The project follows a standard React component-based architecture:
- `src/components/`: Domain-specific components (e.g., `HeroSection`, `DepartmentsSection`, `NavBar`).
- `src/components/ui/`: Reusable primitive components from shadcn/ui (e.g., `button`, `card`, `input`).
- `src/lib/`: Utility functions and shared logic.
- `src/App.tsx`: Main application entry point and layout.
- `src/index.css`: Global styles and Tailwind 4 theme configuration.

## Workflow Mandates

### Validation Requirements
- **Server Health:** Always check the terminal output where the development server (`npm run dev`) or preview server (`npm run preview`) is running for errors or warnings.
- **Console Integrity:** When implementing or modifying features, ensure there are no errors in the browser console.
- **Build Verification:** Before finalizing changes, verify that `npm run build` succeeds without errors and that `npm run preview` works as expected.

## Building and Running

### Development
To start the development server:
```bash
npm run dev
```
The server runs on [http://localhost:3000](http://localhost:3000) by default.

### Build
To create a production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Linting & Type Checking
To run the TypeScript compiler for type checking:
```bash
npm run lint
```

### Environment Variables
The project requires a `GEMINI_API_KEY` for certain features (e.g., AI-powered assistance).
1. Create a `.env.local` file (or use `.env.example` as a template).
2. Set `GEMINI_API_KEY=your_api_key_here`.

## Development Conventions

### Styling with Tailwind 4
Tailwind CSS 4 is configured directly in `src/index.css` using the `@theme` block.
- **Custom Fonts:** "Inter" (sans) and "Outfit" (display).
- **Brand Colors:**
  - `--color-brand-primary`: `#10b981` (Emerald 500)
  - `--color-brand-secondary`: `#020617` (Slate 950)
- **Usage:** Use standard Tailwind classes. For brand colors, use `text-brand-primary`, `bg-brand-primary`, etc.

### Component Structure
- Use functional components and standard React hooks.
- Use `motion/react` for entry and interaction animations.
- Prefer `lucide-react` for iconography.
- Adhere to the `shadcn/ui` style for new UI components.

### Path Aliases
- `@/` maps to the `src/` directory.
- Example: `import { Button } from "@/components/ui/button";`

### Animations
Animations are handled by `motion/react`. Common patterns include:
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true }}`

## Key Files
- `package.json`: Project dependencies and scripts.
- `vite.config.ts`: Vite configuration and plugin setup.
- `src/App.tsx`: Main layout structure.
- `src/index.css`: Tailwind 4 theme and global styles.
- `components.json`: shadcn/ui configuration.
