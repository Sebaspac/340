# 340 Consultancy

Website for 340 Consultancy — a boutique, strategy-led social media consultancy. Strategy, management, 1:1 coaching and content & copywriting, in EN, NL, DE & ES.

## Tech stack

- Vite
- TypeScript
- React + React Router
- shadcn-ui
- Tailwind CSS
- Framer Motion

## Getting started

```sh
npm i
npm run dev
```

The site runs on `http://localhost:8080`.

Behind the scenes, `src/components/PasswordGate.tsx` gates access via `sessionStorage`; the password is read from `VITE_SITE_PASSWORD` in `.env.local`.

## Build & deploy

```sh
npm run build
```

Deploys to Netlify (`netlify deploy --prod --dir=dist`).
