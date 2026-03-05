# Development Setup - Taxi Service Website

This document provides comprehensive technical setup instructions, development guidelines, and code structure for building Popo's taxi service website across all development phases.

## 📑 Table of Contents

- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Local Development Setup](#local-development-setup)
- [Build Process](#build-process)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Version Control](#version-control)

---

## 💻 Development Environment

### Prerequisites

**Required Software**
```bash
# Node.js (LTS version)
node --version  # v18.0.0 or higher
npm --version   # v8.0.0 or higher

# Git
git --version   # v2.30.0 or higher

# Code Editor (Recommended)
# Visual Studio Code with extensions:
# - ES7+ React/Redux/React-Native snippets
# - Prettier
# - ESLint
# - Auto Rename Tag
# - Live Server
```

**Optional Tools**
```bash
# Yarn (alternative to npm)
yarn --version

# Chrome DevTools
# Lighthouse for performance testing
# Web Vitals extension
```

### Development Tools Setup

#### **VS Code Extensions**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "ritwickdey.liveserver",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss"
  ]
}
```

#### **VS Code Settings**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

---

## 📁 Project Structure

### MVP Structure (Phase 1)

```
taxi-service-website/
├── docs/                    # Project documentation
│   ├── PHASES.md
│   ├── FEATURES.md
│   ├── DESIGN.md
│   ├── CONTENT.md
│   ├── DEPLOYMENT.md
│   └── DEVELOPMENT.md
├── src/                     # Source code
│   ├── assets/             # Static assets
│   │   ├── images/         # Optimized images
│   │   ├── icons/          # SVG icons
│   │   └── fonts/          # Custom fonts
│   ├── styles/             # CSS files
│   │   ├── globals.css     # Global styles
│   │   ├── components.css  # Component styles
│   │   └── utilities.css   # Utility classes
│   ├── scripts/            # JavaScript files
│   │   ├── main.js         # Main application logic
│   │   ├── language.js     # Language switching
│   │   └── analytics.js    # Analytics tracking
│   ├── components/         # Reusable components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Pricing.js
│   │   └── Contact.js
│   └── index.html          # Main HTML file
├── public/                 # Public assets
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── tests/                  # Test files
│   ├── unit/
│   └── integration/
├── .env.example            # Environment variables template
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── README.md              # Project overview
└── vite.config.js         # Build configuration
```

### Advanced Structure (Phase 3)

```
taxi-service-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/     # Shared components
│   │   │   ├── forms/      # Form components
│   │   │   └── layout/     # Layout components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React context
│   │   ├── utils/          # Utility functions
│   │   └── services/       # API services
├── backend/                # Node.js backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database models
│   │   ├── middleware/     # Express middleware
│   │   └── services/       # Business logic
├── shared/                 # Shared utilities
└── database/              # Database migrations
```

---

## 🛠️ Technology Stack

### MVP Tech Stack (Phase 1)

#### **Frontend Framework Options**

**Option 1: Vanilla HTML/CSS/JS** (Recommended for MVP)
```javascript
// Pros:
// - Fastest development
// - Smallest bundle size
// - Easy to understand and maintain
// - Perfect for static content

// Cons:
// - Manual DOM manipulation
// - Less scalable for complex features
```

**Option 2: React + Vite** (Recommended for scalability)
```javascript
// Pros:
// - Component-based architecture
// - Easy to scale to Phase 2/3
// - Great developer experience
// - Large ecosystem

// Cons:
// - Steeper learning curve
// - Larger bundle size
```

#### **Styling Framework**

**Tailwind CSS** (Primary Choice)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configuration:**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#F59E0B',
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### Phase 2 Additions

```bash
# Additional dependencies
npm install swiper          # Image galleries
npm install leaflet         # Maps (alternative to Google Maps)
npm install date-fns        # Date utilities
npm install validator       # Form validation
```

### Phase 3 Full Stack

#### **Backend**
```bash
# Express.js setup
npm install express cors helmet morgan
npm install mongoose       # MongoDB
npm install bcryptjs       # Password hashing
npm install jsonwebtoken   # Authentication
npm install nodemailer     # Email service
```

#### **Database**
```bash
# MongoDB (recommended)
npm install mongoose

# PostgreSQL (alternative)
npm install pg sequelize
```

---

## 🚀 Local Development Setup

### Initial Setup

#### **1. Clone and Install**
```bash
# Clone repository
git clone https://github.com/yourusername/taxi-service-website.git
cd taxi-service-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

#### **2. Environment Configuration**
```env
# .env file
NODE_ENV=development
SITE_URL=http://localhost:3000
WHATSAPP_NUMBER=905551234567
GOOGLE_MAPS_API_KEY=your_api_key_here
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Phase 3 additions
DB_CONNECTION=mongodb://localhost:27017/taxi-service
JWT_SECRET=your_jwt_secret_here
EMAIL_SERVICE_API_KEY=your_email_api_key
```

#### **3. Start Development Server**
```bash
# For Vite
npm run dev

# For vanilla setup with live server
npx live-server src --port=3000 --host=localhost
```

### MVP Development Commands

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --fix",
    "format": "prettier --write src/**/*.{js,css,html}",
    "optimize-images": "node scripts/optimize-images.js",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## 🔨 Build Process

### Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html')
      },
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
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
})
```

### Build Optimization

#### **Image Optimization Script**
```javascript
// scripts/optimize-images.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = './src/assets/images'
const outputDir = './src/assets/images/optimized'

async function optimizeImages() {
  const files = fs.readdirSync(inputDir)

  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue

    const inputPath = path.join(inputDir, file)
    const name = path.parse(file).name

    // Generate WebP
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${name}.webp`))

    // Generate optimized JPEG
    await sharp(inputPath)
      .jpeg({ quality: 85 })
      .toFile(path.join(outputDir, `${name}.jpg`))
  }
}

optimizeImages()
```

---

## 📝 Code Standards

### HTML Standards

```html
<!-- Use semantic HTML5 elements -->
<main role="main">
  <section class="hero" aria-labelledby="hero-heading">
    <h1 id="hero-heading">Güvenilir Taksi Hizmeti</h1>
    <!-- Always include alt text for images -->
    <img src="popo-photo.webp" alt="Popo, professional taxi driver" />
  </section>
</main>

<!-- Include proper meta tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Professional taxi service in [city]">
```

### CSS/Tailwind Standards

```css
/* Use CSS custom properties for theming */
:root {
  --color-primary: #1E3A8A;
  --color-secondary: #F59E0B;
  --font-size-base: 1rem;
}

/* Follow BEM methodology for custom CSS */
.hero__title {
  @apply text-4xl font-bold text-primary;
}

/* Mobile-first responsive design */
.container {
  @apply px-4 mx-auto;
}

@media (min-width: 768px) {
  .container {
    @apply px-6;
  }
}
```

### JavaScript Standards

```javascript
// Use modern ES6+ syntax
const contactButton = document.querySelector('.contact-button')

// Async/await for promises
async function sendMessage(message) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    return await response.json()
  } catch (error) {
    console.error('Failed to send message:', error)
  }
}

// Event delegation for dynamic content
document.addEventListener('click', (event) => {
  if (event.target.matches('.whatsapp-button')) {
    trackEvent('whatsapp_click')
    // WhatsApp redirect logic
  }
})
```

### Code Formatting

#### **Prettier Configuration**
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "htmlWhitespaceSensitivity": "ignore"
}
```

#### **ESLint Configuration**
```json
{
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es2021": true
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "prefer-const": "error"
  }
}
```

---

## 🧪 Testing Guidelines

### Testing Strategy

```javascript
// Unit tests for utility functions
// tests/utils.test.js
import { formatPhoneNumber, calculateFare } from '../src/utils'

describe('Utility Functions', () => {
  test('formatPhoneNumber formats Turkish numbers correctly', () => {
    expect(formatPhoneNumber('5551234567'))
      .toBe('+90 555 123 45 67')
  })

  test('calculateFare returns correct price', () => {
    expect(calculateFare(10, 'city')).toBe(100) // 8*10 + 20
  })
})
```

### Manual Testing Checklist

#### **MVP Testing**
- [ ] All links work correctly
- [ ] WhatsApp integration opens correctly
- [ ] Phone links work on mobile
- [ ] Language toggle functions
- [ ] Responsive design on all devices
- [ ] Images load with proper fallbacks
- [ ] Form validation works
- [ ] Analytics events fire

#### **Performance Testing**
```bash
# Lighthouse CLI testing
npm install -g lighthouse
lighthouse http://localhost:3000 --output=html --output-path=./reports/lighthouse.html

# Core Web Vitals
npm install -g @lhci/cli
lhci autorun
```

---

## 🔄 Version Control

### Git Workflow

#### **Branch Strategy**
```bash
main           # Production-ready code
develop        # Integration branch
feature/*      # Feature development
hotfix/*       # Emergency fixes
release/*      # Release preparation
```

#### **Commit Conventions**
```bash
# Type: Brief description

feat: add WhatsApp contact button
fix: resolve mobile navigation issue
docs: update deployment instructions
style: improve button hover animations
refactor: optimize image loading
test: add unit tests for utils
chore: update dependencies
```

### Pre-commit Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss}": ["prettier --write"],
    "*.{html,md}": ["prettier --write"]
  }
}
```

### Release Process

```bash
# Feature development
git checkout develop
git checkout -b feature/customer-reviews
# ... make changes ...
git commit -m "feat: implement customer review display"
git push origin feature/customer-reviews
# Create pull request to develop

# Release process
git checkout develop
git checkout -b release/v1.1.0
# ... final testing and bug fixes ...
git checkout main
git merge release/v1.1.0
git tag v1.1.0
git push origin main --tags
```

This development guide provides all necessary information for setting up and maintaining the taxi service website codebase efficiently and professionally.

---

## 🔧 Development Best Practices

### Code Organization

**Component Structure**
```javascript
// components/Hero.js
export class Hero {
  constructor(container) {
    this.container = container
    this.init()
  }

  init() {
    this.render()
    this.bindEvents()
  }

  render() {
    // Component rendering logic
  }

  bindEvents() {
    // Event handling
  }
}
```

**State Management**
```javascript
// Simple state management for vanilla JS
class AppState {
  constructor() {
    this.state = {
      language: 'tr',
      currentSection: 'hero'
    }
    this.subscribers = []
  }

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.notify()
  }

  subscribe(callback) {
    this.subscribers.push(callback)
  }

  notify() {
    this.subscribers.forEach(callback => callback(this.state))
  }
}
```

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"content": "Create main README.md with project overview", "status": "completed", "activeForm": "Creating main README.md"}, {"content": "Create docs folder and PHASES.md with development roadmap", "status": "completed", "activeForm": "Creating PHASES.md documentation"}, {"content": "Create FEATURES.md with detailed feature specifications", "status": "completed", "activeForm": "Creating FEATURES.md documentation"}, {"content": "Create DESIGN.md with design system and guidelines", "status": "completed", "activeForm": "Creating DESIGN.md documentation"}, {"content": "Create CONTENT.md with copy and media requirements", "status": "completed", "activeForm": "Creating CONTENT.md documentation"}, {"content": "Create DEPLOYMENT.md with hosting and setup guide", "status": "completed", "activeForm": "Creating DEPLOYMENT.md documentation"}, {"content": "Create DEVELOPMENT.md with technical setup guide", "status": "completed", "activeForm": "Creating DEVELOPMENT.md documentation"}]