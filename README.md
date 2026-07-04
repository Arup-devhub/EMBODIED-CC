# Embodied CC — AI-Powered Embodied Carbon Intelligence

A modern, production-ready web application for calculating embodied carbon, optimizing materials, and discovering carbon reduction opportunities before construction begins.

##  Tech Stack

- **Frontend Framework**: React 19.2.7
- **Build Tool**: Vite 8.1.1
- **Routing**: React Router DOM 7.18.1
- **Icons**: Lucide React 1.23.0
- **Charts**: Recharts 3.9.2
- **Language**: TypeScript 6.0.2
- **Styling**: Custom CSS with design tokens
- **Deployment**: Vercel-ready

## Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd embodiedcc
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:3000`

## Build for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist/` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Vercel (Recommended - One Click)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Or connect your GitHub repository** to Vercel for automatic deployments

   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Vercel will automatically detect the Vite configuration
   - Deploy with one click

### Netlify

1. **Install Netlify CLI** (optional)
   ```bash
   npm i -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Other Platforms

The `dist/` folder contains all static files and can be deployed to:
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages
- Any static hosting service

## Project Structure

```
embodiedcc/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   └── landing/     # Landing page components
│   ├── pages/           # Page components
│   ├── assets/          # Images, fonts, etc.
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and design tokens
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## Features

- **Landing Page**: Modern, responsive landing page with hero, features, pricing
- **Dashboard**: Full-featured dashboard for carbon calculations
- **Blueprint OCR**: Upload and extract material quantities from PDFs
- **Carbon Calculator**: Per-material emissions with full transparency
- **Material Recommender**: Low-carbon alternatives with cost & strength data
- **Climate Intelligence**: Tailored advice across India's 5 climate zones
- **Optimization Simulator**: Compare current vs optimized scenarios
- **Credit Estimator**: Forecast tradable tCO₂e from savings
- **Project Reports**: Audit-ready PDF exports
- **AI Advisor**: Natural language queries about carbon strategy

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_APP_TITLE=Embodied CC
```

### Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Modify Google Fonts in `index.html`
- **Routes**: Add routes in `src/App.jsx`

## Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## Performance

- Code splitting with Vite
- Lazy loading for routes
- Optimized bundle sizes
- Tree-shaking for unused code
- Source maps for debugging

## Support

For support, email [arupanandalenka16@gmail.com] or open an issue in the repository.

---

Built with precision using React, Vite, and modern web technologies.
