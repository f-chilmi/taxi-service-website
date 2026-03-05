# Deployment Guide - Taxi Service Website

This document provides comprehensive deployment and hosting guidelines for Popo's taxi service website, covering hosting options, domain setup, performance optimization, and ongoing maintenance.

## 📑 Table of Contents

- [Hosting Platforms](#hosting-platforms)
- [Domain Configuration](#domain-configuration)
- [Deployment Process](#deployment-process)
- [Performance Optimization](#performance-optimization)
- [Analytics & Monitoring](#analytics--monitoring)
- [Security Configuration](#security-configuration)
- [Maintenance & Updates](#maintenance--updates)

---

## 🚀 Hosting Platforms

### Recommended Hosting Solutions

#### 1. **Netlify** (Primary Recommendation)

**Pros:**
- Free tier perfect for MVP
- Automatic HTTPS
- Global CDN included
- Easy GitHub integration
- Form handling built-in
- Turkish server locations available

**Cons:**
- Limited to static sites (MVP suitable)
- Advanced features require paid plans

#### 3. **GitHub Pages** (Primary Recommendation - FREE!)

**Pros:**
- Completely free hosting
- Perfect for Next.js static export
- Automatic deployments from GitHub
- Custom domain support
- Built-in CI/CD with GitHub Actions

**Setup Process:**
```bash
# Next.js + GitHub Pages Deployment
1. Configure next.config.js for static export:
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }

2. Update package.json scripts:
   "build": "next build && next export"
   "deploy": "npm run build && gh-pages -d out"

3. Push to GitHub repository

4. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions or Deploy from branch
   - Branch: gh-pages or main

5. Custom domain (optional):
   - Add CNAME file with your domain
   - Configure DNS A records
```

**Pricing:**
- Free: 100GB bandwidth, 300 build minutes
- Pro ($19/month): 1TB bandwidth, unlimited builds

#### 2. **Vercel** (Alternative)

**Pros:**
- Excellent Next.js integration
- Global edge network
- Automatic deployments
- Free SSL certificates

**Cons:**
- Primarily React/Next.js focused
- More complex for non-React projects

**Setup Process:**
```bash
# Vercel CLI deployment
npm install -g vercel
vercel
# Follow prompts for domain and settings
```

#### 3. **GitHub Pages** (Budget Option)

**Pros:**
- Completely free
- Direct GitHub integration
- Custom domain support

**Cons:**
- Static sites only
- Limited features
- No server-side processing

### Cloud Hosting for Phase 3

#### **DigitalOcean** (Advanced Features)
```
Droplet Configuration:
- Size: 1GB RAM, 1 vCPU ($6/month)
- Region: Frankfurt (closest to Turkey)
- OS: Ubuntu 20.04 LTS
- Additional: Managed Database if needed
```

#### **AWS** (Enterprise Scale)
```
Services Needed:
- EC2 t3.micro (Free tier eligible)
- S3 for static assets
- CloudFront CDN
- Route53 for DNS
- RDS for database (Phase 3)
```

---

## 🌐 Domain Configuration

### Domain Options

#### **Primary Options**
1. **popotaxi.com** - Global reach
2. **popotaxi.com.tr** - Turkish market focus
3. **taxipopo.com** - Alternative branding

#### **Domain Registration**
- **Recommended**: Namecheap, GoDaddy
- **Turkish Registrar**: Natro, Turkcell
- **Cost**: $10-15/year for .com, $20-30/year for .com.tr

### DNS Configuration

```dns
# DNS Records for popotaxi.com
Type    Name    Value                   TTL
A       @       104.198.14.52          300
A       www     104.198.14.52          300
CNAME   mail    ghs.googlehosted.com   300
TXT     @       v=spf1 include:_spf.google.com ~all
```

#### **Netlify DNS Setup**
```bash
# Custom Domain Configuration
1. Add domain in Netlify dashboard
2. Update nameservers:
   - dns1.p03.nsone.net
   - dns2.p03.nsone.net
   - dns3.p03.nsone.net
   - dns4.p03.nsone.net
3. Verify domain ownership
4. Enable automatic HTTPS
```

### Email Configuration

**Google Workspace Setup** (Professional emails)
```
Email addresses needed:
- info@popotaxi.com (main contact)
- booking@popotaxi.com (reservations)
- popo@popotaxi.com (personal)

Cost: $6/month per user
Alternative: Forward to existing Gmail
```

---

## 🔧 Deployment Process

### MVP Deployment (Static Site)

#### **Step 1: Prepare Build**
```bash
# Install dependencies
npm install

# Run build process
npm run build

# Test production build locally
npm run preview
```

#### **Step 2: Deploy to Netlify**
```bash
# Option A: GitHub Integration (Recommended)
1. Push to main branch
2. Automatic deployment triggered
3. Preview deployments for pull requests

# Option B: Manual Deploy
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

#### **Step 3: Configure Environment**
```env
# Netlify Environment Variables
GOOGLE_MAPS_API_KEY=your_maps_api_key
WHATSAPP_NUMBER=905551234567
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
SITE_URL=https://popotaxi.com
```

### Phase 2 Deployment (Enhanced Static)

#### **Additional Configuration**
```yaml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production]
  environment = { NODE_ENV = "production" }
```

### Phase 3 Deployment (Full Application)

#### **Backend Deployment (DigitalOcean)**
```bash
# Server Setup
1. Create Ubuntu droplet
2. Install Node.js, nginx, PM2
3. Configure database
4. Deploy application
5. Setup SSL certificates
6. Configure domain

# PM2 Process Management
pm2 start npm --name "taxi-api" -- start
pm2 startup
pm2 save
```

---

## ⚡ Performance Optimization

### Image Optimization

#### **Build Process Integration**
```javascript
// vite.config.js or webpack config
export default {
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  },
  plugins: [
    // Image compression plugin
    imageOptimize({
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 85 }
    })
  ]
}
```

#### **Manual Image Optimization**
```bash
# ImageMagick batch processing
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1200x800> "optimized/$img"
done

# WebP conversion
for img in *.jpg; do
  cwebp -q 85 "$img" -o "${img%.jpg}.webp"
done
```

### CDN Configuration

#### **Netlify CDN (Automatic)**
- Global edge locations
- Automatic image optimization
- Brotli compression enabled

#### **CloudFlare Setup** (Additional CDN)
```
CloudFlare Configuration:
1. Add site to CloudFlare
2. Update nameservers
3. Enable:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - Image optimization
   - Mobile optimization
4. Set cache rules:
   - Images: Cache for 1 month
   - CSS/JS: Cache for 1 week
   - HTML: Cache for 4 hours
```

### Performance Monitoring

```javascript
// Core Web Vitals tracking
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.value),
    event_label: metric.id,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

## 📊 Analytics & Monitoring

### Google Analytics 4 Setup

#### **Implementation**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### **Event Tracking**
```javascript
// WhatsApp clicks
document.querySelector('.whatsapp-button').addEventListener('click', () => {
  gtag('event', 'whatsapp_contact', {
    event_category: 'engagement',
    event_label: 'hero_section'
  });
});

// Phone clicks
document.querySelector('.phone-button').addEventListener('click', () => {
  gtag('event', 'phone_contact', {
    event_category: 'engagement',
    event_label: 'contact_section'
  });
});

// Form submissions
document.querySelector('#contact-form').addEventListener('submit', () => {
  gtag('event', 'form_submission', {
    event_category: 'lead',
    event_label: 'contact_form'
  });
});
```

### Google Search Console

#### **Setup Process**
1. Add property for popotaxi.com
2. Verify ownership via HTML file or meta tag
3. Submit sitemap: https://popotaxi.com/sitemap.xml
4. Monitor search performance

#### **Sitemap Generation**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://popotaxi.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://popotaxi.com/en/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Uptime Monitoring

#### **UptimeRobot Setup** (Free)
```
Monitoring Configuration:
- Check interval: 5 minutes
- Timeout: 30 seconds
- Monitor type: HTTP(S)
- Alert contacts: email, SMS
- Status page: Public dashboard
```

#### **Error Tracking** (Sentry)
```javascript
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_DSN",
  environment: "production",
  integrations: [
    new Sentry.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});
```

---

## 🔒 Security Configuration

### SSL/HTTPS Setup

#### **Netlify (Automatic)**
- Automatic Let's Encrypt certificates
- HTTPS redirect enabled
- HSTS headers configured

#### **Custom SSL (Advanced)**
```nginx
# Nginx SSL configuration
server {
    listen 443 ssl http2;
    server_name popotaxi.com www.popotaxi.com;

    ssl_certificate /etc/ssl/certs/popotaxi.crt;
    ssl_certificate_key /etc/ssl/private/popotaxi.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
}
```

### Security Headers

```html
<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com;
">
```

### Backup Strategy

#### **Automated Backups**
```bash
#!/bin/bash
# Daily backup script
DATE=$(date +%Y%m%d)
git archive --format=tar.gz --output=backup-$DATE.tar.gz HEAD
aws s3 cp backup-$DATE.tar.gz s3://taxi-backups/
```

---

## 🔧 Maintenance & Updates

### Regular Maintenance Tasks

#### **Weekly**
- [ ] Check website functionality
- [ ] Review analytics data
- [ ] Monitor uptime reports
- [ ] Test contact forms
- [ ] Verify WhatsApp integration

#### **Monthly**
- [ ] Update dependencies
- [ ] Review performance metrics
- [ ] Check security updates
- [ ] Backup website data
- [ ] Review customer feedback

#### **Quarterly**
- [ ] Content updates and refresh
- [ ] SEO performance review
- [ ] Competitor analysis
- [ ] Feature planning review
- [ ] Hosting cost optimization

### Update Deployment Process

#### **Content Updates**
```bash
# Safe deployment process
1. Create feature branch
2. Make content changes
3. Test locally
4. Create pull request
5. Review changes
6. Deploy to staging
7. Test on staging
8. Merge to main
9. Automatic production deployment
```

#### **Emergency Updates**
```bash
# Hotfix deployment
1. Create hotfix branch from main
2. Make critical fix
3. Test locally
4. Deploy directly to production
5. Monitor for issues
6. Merge back to develop branch
```

### Performance Monitoring

#### **Key Metrics to Monitor**
```javascript
// Monthly performance report
const metrics = {
  pageLoadTime: '< 3 seconds',
  mobilePageSpeed: '> 90',
  uptimePercentage: '> 99.5%',
  conversionRate: '> 5%',
  bounceRate: '< 40%',
  organicTraffic: 'month-over-month growth'
};
```

### Cost Management

#### **Monthly Hosting Costs**
```
Netlify Pro: $19/month
Domain: $1/month
Email: $6/month
Analytics: Free
Monitoring: Free
Total: ~$26/month

ROI Target: 2+ new customers/month
Break-even: 1 customer/month
```

This deployment guide ensures Popo's taxi service website launches successfully with proper performance, security, and monitoring in place for long-term success.