# Ishrat Fatima — Portfolio

A personal editorial-style portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Editorial design** — magazine-inspired layout with custom typography (Cormorant Garamond + Inter)
- **Smooth animations** powered by Framer Motion
- **Responsive** across mobile, tablet, and desktop
- **Project showcase** with direct "View Code" links to GitHub repositories
- **Downloadable CV/Résumé** from the hero and contact sections
- **Accessible** semantic HTML and keyboard-friendly navigation

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — lightning-fast dev server and build tool
- **Tailwind CSS** — with a custom semantic design system (HSL tokens)
- **shadcn/ui** — accessible component primitives
- **Framer Motion** — animations and scroll interactions
- **Lucide React** — icon set

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (or [Bun](https://bun.sh))
- npm, pnpm, yarn, or bun

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd <PROJECT_NAME>

# 2. Install dependencies
npm install
# or
bun install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:8080**.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
├── public/                  # Static assets (CV, favicon, images)
│   └── ishrat-fatima-cv.docx
├── src/
│   ├── assets/              # Imported images
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── NavLink.tsx
│   ├── pages/
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── index.css            # Global styles & design tokens
│   └── main.tsx             # App entry point
├── tailwind.config.ts       # Tailwind theme configuration
└── vite.config.ts           # Vite configuration
```

## 🎨 Customization

### Update personal info
Edit `src/pages/Index.tsx` to change projects, experience, education, skills, and contact details.

### Replace the CV
Drop your file into `public/` and update the `href` of the download buttons in `src/pages/Index.tsx`.

### Replace the hero photo
Replace the imported image at the top of `src/pages/Index.tsx` with your own from `src/assets/`.

### Theme & colors
All colors live as HSL tokens in `src/index.css` and are mapped in `tailwind.config.ts`. Edit the tokens to re-skin the entire site.

## 🌐 Deployment

You can deploy the production build (`npm run build` → `dist/`) to any static host:

- **Vercel** / **Netlify** — connect the repo and deploy automatically
- **GitHub Pages** — push `dist/` to a `gh-pages` branch
- **Lovable** — open the project in Lovable and click **Publish**

## 📄 License

This project is open source and free to use as a template for your own portfolio.

---

Built with ❤️ using [Lovable](https://lovable.dev).
