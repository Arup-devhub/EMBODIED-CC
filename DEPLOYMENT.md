# Deployment Guide

This guide covers deploying the Embodied CC application to various platforms.

## Quick Start (Vercel - Recommended)

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

### Option 2: Vercel Dashboard (Git Integration)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

**Note**: The `vercel.json` file is already configured for SPA routing.

## Netlify Deployment

### Option 1: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Initialize:
   ```bash
   netlify init
   ```

4. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Netlify Dashboard

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Deploy

**Note**: The `netlify.toml` file is already configured for SPA routing.

## GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` branch
   - Save

## AWS S3 + CloudFront

### S3 Setup

1. Create an S3 bucket
2. Enable static website hosting
3. Build the project:
   ```bash
   npm run build
   ```

4. Upload `dist/` contents to S3:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

5. Set bucket policy for public access

### CloudFront Setup

1. Create CloudFront distribution
2. Set origin to your S3 bucket
3. Configure error pages for SPA routing (403/404 → /index.html)
4. Add custom domain (optional)

## Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to Workers & Pages → Create → Pages
3. Connect to Git or upload directly
4. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy

## Docker Deployment

1. Create `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Create `nginx.conf`:
   ```nginx
   server {
       listen 80;
       server_name localhost;
       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. Build and run:
   ```bash
   docker build -t embodiedcc .
   docker run -p 80:80 embodiedcc
   ```

## Environment Variables

Create a `.env` file in your project root:

```env
VITE_API_URL=https://api.embodiedcc.com
VITE_APP_TITLE=Embodied CC
VITE_ENABLE_ANALYTICS=false
```

**Important**: Never commit `.env` files. Use `.env.example` as a template.

## Pre-Deployment Checklist

- [ ] Update `VITE_API_URL` in environment variables
- [ ] Test production build locally: `npm run build && npm run preview`
- [ ] Verify all routes work in production
- [ ] Check responsive design on mobile/tablet
- [ ] Test all user flows
- [ ] Update meta tags in `index.html`
- [ ] Configure analytics (if needed)
- [ ] Set up error monitoring (if needed)
- [ ] Configure custom domain (if needed)

## Post-Deployment

- [ ] Set up SSL/HTTPS
- [ ] Configure CDN caching
- [ ] Set up monitoring/alerts
- [ ] Configure backup strategy
- [ ] Set up CI/CD pipeline
- [ ] Document API endpoints
- [ ] Set up staging environment

## Troubleshooting

### Blank page after deployment

- Check browser console for errors
- Verify build output in `dist/`
- Check routing configuration (SPA routing)
- Ensure environment variables are set

### 404 errors on refresh

- Ensure SPA routing is configured:
  - Vercel: `vercel.json` (already included)
  - Netlify: `netlify.toml` (already included)
  - Nginx: `try_files $uri $uri/ /index.html;`

### Build fails

- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check for TypeScript errors

## Performance Optimization

The project is already optimized with:
- Code splitting
- Lazy loading
- Tree shaking
- Minification
- Source maps (development only)

For additional optimization:
- Enable compression on your server
- Configure CDN for static assets
- Implement service worker for PWA
- Use image optimization
- Enable HTTP/2

## Monitoring

Recommended monitoring tools:
- **Sentry**: Error tracking
- **Google Analytics**: User analytics
- **Vercel Analytics**: Performance metrics
- **LogRocket**: Session replay
- **Pingdom**: Uptime monitoring

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Check browser console
4. Verify environment configuration
5. Contact platform support if needed
