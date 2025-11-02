# Clean and Green Energy

A modern, interactive web application showcasing renewable energy systems including Wind, Hydro, and Solar energy with detailed flow diagrams and explanations.

## Features

- 🏠 Beautiful homepage with navigation to different energy types
- 🌬️ Wind Energy System page with interactive flow diagram
- 💧 Hydro Energy System page with interactive flow diagram
- ☀️ Solar Energy System page with interactive flow diagram
- ✨ Smooth animations and transitions
- 📱 Responsive design for all devices
- 🎨 Modern UI with glassmorphism effects

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── wind/
│   │   └── page.tsx        # Wind energy page
│   ├── hydro/
│   │   └── page.tsx        # Hydro energy page
│   └── solar/
│       └── page.tsx        # Solar energy page
└── components/
    └── EnergyDiagram.tsx   # Reusable diagram component
```

## License

MIT
