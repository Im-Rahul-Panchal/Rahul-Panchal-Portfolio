# Rahul Panchal - Portfolio Website

A premium, production-grade personal portfolio website built with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with improved performance
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Smooth animations and micro-interactions
- **Lucide React** - Beautiful, consistent icons

### Backend
- **Node.js + Express.js** - RESTful API server
- **Zod** - Schema validation
- **Nodemailer** - Email delivery
- **Express Rate Limit** - API protection

## ✨ Features

- 🎨 **Premium Dark Theme** - Glassmorphic design with gradient accents
- ⚡ **Blazing Fast** - Optimized for Lighthouse scores 95+
- 📱 **Mobile-First** - Fully responsive across all devices
- 🎭 **Smooth Animations** - 60fps micro-interactions with Framer Motion
- 📧 **Contact Form** - Integrated backend with email delivery
- 🔒 **Secure** - Rate limiting, validation, and spam protection
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎯 **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install server dependencies**
```bash
cd ../server
npm install
```

4. **Configure environment variables**
```bash
cd server
cp .env.example .env
# Edit .env with your SMTP credentials
```

## 🏃 Running the Project

### Development Mode

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
Backend will run on `http://localhost:5000`

### Production Build

**Build frontend:**
```bash
cd client
npm run build
npm run preview
```

**Run backend:**
```bash
cd server
npm start
```

## 📧 Email Configuration

The contact form uses Nodemailer for email delivery. Configure your SMTP settings in `server/.env`:

### Gmail Setup
1. Enable 2-factor authentication on your Google Account
2. Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)
3. Add credentials to `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=rahul@example.com
```

## 🎨 Customization

### Update Personal Information
- Edit content in component files under `client/src/components/`
- Update social links in `Footer.jsx`
- Replace placeholder resume at `client/public/resume.pdf`

### Design Tokens
Modify design tokens in `client/src/index.css`:
- Colors, gradients, spacing
- Typography (fonts loaded from Google Fonts)

### Projects
Update project data in `client/src/components/Projects.jsx`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Render/Heroku)
```bash
cd server
# Deploy with your preferred platform
```

### Environment Variables
Set these on your hosting platform:
- `PORT`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `RECIPIENT_EMAIL`

## 📊 Performance

Target metrics (Lighthouse):
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Optimization Features
- Code splitting
- Lazy loading
- Image optimization
- Minification
- Caching headers

## 📝 License

© 2026 Rahul Panchal. All rights reserved.

## 🤝 Contact

- Email: rahul@example.com
- GitHub: [@rahulpanchal](https://github.com/rahulpanchal)
- LinkedIn: [Rahul Panchal](https://linkedin.com/in/rahulpanchal)

---

Built with ❤️ using React + Tailwind
