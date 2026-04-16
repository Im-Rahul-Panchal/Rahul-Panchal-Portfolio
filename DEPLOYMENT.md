# Deployment Guide

## Quick Start

### Development
```bash
# Install all dependencies
npm run install:all

# Start both client and server
npm run dev
```

### Production

#### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

#### Backend (Railway/Render)
```bash
cd server
# Set environment variables on your platform
# Deploy the server folder
```

## Environment Variables

### Server (.env)
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=rahul@example.com
```

## Performance Checklist

- ✅ React 19 with latest optimizations
- ✅ Vite for fast builds and HMR
- ✅ Code splitting and lazy loading
- ✅ Optimized images and assets
- ✅ Minified and compressed output
- ✅ SEO meta tags and structured data
- ✅ Accessibility compliance
- ✅ Mobile-first responsive design

## Lighthouse Targets
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Security Features
- Rate limiting on contact form
- Input validation with Zod
- CORS configuration
- Spam protection (honeypot)
- Environment variable protection