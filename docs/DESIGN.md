# Design Guidelines - Taxi Service Website

This document establishes the visual design system, user experience principles, and brand guidelines for Popo's taxi service website, ensuring consistency across all phases of development.

## 📑 Table of Contents

- [Design Philosophy](#design-philosophy)
- [Brand Identity](#brand-identity)
- [Color System](#color-system)
- [Typography](#typography)
- [Layout & Spacing](#layout--spacing)
- [Component Design](#component-design)
- [Mobile-First Approach](#mobile-first-approach)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Cultural Considerations](#cultural-considerations)

---

## 🎨 Design Philosophy

### Core Principles

**Trust & Reliability**
- Professional appearance that builds confidence
- Clean, uncluttered layouts
- Consistent visual hierarchy
- Credible imagery and testimonials

**Simplicity & Clarity**
- Easy navigation and clear information architecture
- Minimal cognitive load for users
- Straightforward booking process
- Clear pricing and contact information

**Local Connection**
- Turkish market cultural sensitivity
- Familiar design patterns for Turkish users
- Local landmarks and references
- Community-focused messaging

**Mobile-First Excellence**
- Optimized for Turkish mobile usage patterns
- Fast loading on mobile networks
- Touch-friendly interface design
- Offline-capable features

---

## 🏢 Brand Identity

### Brand Positioning
"Reliable, personal, and professional taxi service that treats every passenger like family while maintaining the highest standards of safety and comfort."

### Brand Values
- **Reliability**: Always on time, always available
- **Personal Touch**: Know your driver, build relationships
- **Local Expertise**: Deep knowledge of the area
- **Safety First**: Professional driving, safe vehicles
- **Transparency**: Clear pricing, no surprises

### Visual Identity Goals
- Approachable yet professional
- Trustworthy and established
- Distinctly Turkish but internationally appealing
- Modern without being trendy

---

## 🎨 Color System

### Primary Colors

**Turkish Blue** - `#1E3A8A` (Primary Brand)
- Usage: Headers, primary buttons, accent elements
- Represents: Trust, stability, professionalism
- Turkish cultural connection: National colors

**Warm Gold** - `#F59E0B` (Secondary/Accent)
- Usage: Call-to-action buttons, highlights, icons
- Represents: Premium service, warmth, success
- Turkish cultural connection: Hospitality, warmth

### Supporting Colors

**Deep Navy** - `#0F172A` (Text Primary)
- Usage: Main text, headlines
- High contrast, excellent readability

**Charcoal Gray** - `#374151` (Text Secondary)
- Usage: Subtext, descriptions
- Softer than black, still readable

**Light Gray** - `#F8FAFC` (Background Light)
- Usage: Section backgrounds, cards
- Clean, modern appearance

**White** - `#FFFFFF` (Background Primary)
- Usage: Main background, card backgrounds
- Clean, professional base

### Status Colors

**Success Green** - `#10B981`
- Usage: Success messages, available status
- Turkish cultural connection: Positive associations

**Warning Orange** - `#F59E0B`
- Usage: Important notices, pricing highlights
- Attention-grabbing without alarm

**Error Red** - `#EF4444`
- Usage: Error messages, unavailable status
- Clear communication of issues

**WhatsApp Green** - `#25D366`
- Usage: WhatsApp buttons only
- Brand recognition for Turkish users

### Color Usage Guidelines

```css
/* Primary Brand Colors */
--color-primary: #1E3A8A;        /* Turkish Blue */
--color-secondary: #F59E0B;      /* Warm Gold */

/* Text Colors */
--color-text-primary: #0F172A;   /* Deep Navy */
--color-text-secondary: #374151; /* Charcoal Gray */
--color-text-muted: #6B7280;     /* Medium Gray */

/* Background Colors */
--color-bg-primary: #FFFFFF;     /* White */
--color-bg-secondary: #F8FAFC;   /* Light Gray */
--color-bg-accent: #EFF6FF;      /* Light Blue */

/* Status Colors */
--color-success: #10B981;        /* Success Green */
--color-warning: #F59E0B;        /* Warning Orange */
--color-error: #EF4444;          /* Error Red */
--color-whatsapp: #25D366;       /* WhatsApp Green */
```

---

## ✍️ Typography

### Font Selection

**Primary Font**: Inter or Poppins
- Modern, highly legible sans-serif
- Excellent Turkish character support (ğ, ı, ş, ç, ö, ü)
- Multiple weights available
- Optimized for screens

**Fallback Stack**:
```css
font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Typography Scale

```css
/* Heading Scale */
--font-size-h1: clamp(2rem, 5vw, 3rem);      /* 32px-48px */
--font-size-h2: clamp(1.75rem, 4vw, 2.5rem); /* 28px-40px */
--font-size-h3: clamp(1.5rem, 3vw, 2rem);    /* 24px-32px */
--font-size-h4: clamp(1.25rem, 2.5vw, 1.5rem); /* 20px-24px */

/* Body Text */
--font-size-base: 1rem;          /* 16px */
--font-size-lg: 1.125rem;        /* 18px */
--font-size-sm: 0.875rem;        /* 14px */
--font-size-xs: 0.75rem;         /* 12px */

/* Line Heights */
--line-height-tight: 1.25;       /* Headlines */
--line-height-normal: 1.5;       /* Body text */
--line-height-relaxed: 1.625;    /* Long form content */
```

### Font Weights

```css
--font-weight-normal: 400;       /* Regular text */
--font-weight-medium: 500;       /* Emphasis */
--font-weight-semibold: 600;     /* Subheadings */
--font-weight-bold: 700;         /* Headlines */
```

### Typography Usage

**Headlines (H1-H3)**
- Bold weight (700)
- Tight line height (1.25)
- Turkish Blue or Deep Navy color
- Adequate spacing below

**Body Text**
- Regular weight (400)
- Normal line height (1.5)
- Deep Navy color
- 16px minimum size for readability

**Links**
- Medium weight (500)
- Turkish Blue color
- Underline on hover
- Clear hover states

---

## 📐 Layout & Spacing

### Grid System

**Desktop Layout**: 12-column grid
- Max width: 1200px
- Container margins: 2rem (32px)
- Column gap: 1.5rem (24px)

**Mobile Layout**: Single column
- Container margins: 1rem (16px)
- Full-width components
- Vertical spacing emphasis

### Spacing Scale

```css
/* Spacing Scale (8px base) */
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
```

### Section Spacing

```css
/* Vertical Rhythm */
--section-padding: clamp(3rem, 8vw, 6rem);   /* 48px-96px */
--component-margin: clamp(1.5rem, 4vw, 3rem); /* 24px-48px */
--element-margin: clamp(1rem, 3vw, 2rem);     /* 16px-32px */
```

---

## 🧩 Component Design

### Buttons

**Primary Button (WhatsApp, Main CTA)**
```css
.button-primary {
  background: var(--color-whatsapp);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button-primary:hover {
  background: #22c55e;
  transform: translateY(-1px);
}
```

**Secondary Button (Phone, Contact)**
```css
.button-secondary {
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
}
```

**Outline Button (Learn More)**
```css
.button-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}
```

### Cards

**Service Cards**
```css
.service-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.service-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
```

**Review Cards**
```css
.review-card {
  background: var(--color-bg-secondary);
  border-radius: 0.5rem;
  padding: 1.25rem;
  border-left: 4px solid var(--color-secondary);
}
```

### Forms

**Input Fields**
```css
.form-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
}
```

---

## 📱 Mobile-First Approach

### Breakpoint Strategy

```css
/* Mobile First Breakpoints */
/* Mobile: 0-768px (default styles) */

@media (min-width: 768px) {
  /* Tablet: 768px+ */
}

@media (min-width: 1024px) {
  /* Desktop: 1024px+ */
}

@media (min-width: 1280px) {
  /* Large Desktop: 1280px+ */
}
```

### Mobile Optimization

**Touch Targets**
- Minimum 44px (iOS) / 48px (Android) touch areas
- Adequate spacing between clickable elements
- Easy thumb navigation zones

**Performance**
- Optimized images for mobile networks
- Progressive loading strategies
- Minimal JavaScript bundles

**Navigation**
- Hamburger menu for mobile
- Sticky header with key actions
- Bottom navigation for primary actions

---

## ♿ Accessibility Guidelines

### Color Accessibility

**Contrast Ratios**
- Text on background: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Color Independence**
- Never rely solely on color to convey information
- Use icons, text, or patterns as alternatives
- Test with color blindness simulators

### Interactive Elements

**Focus States**
- Clear focus indicators for keyboard navigation
- Consistent focus ring design
- Logical tab order

**Screen Reader Support**
- Alt text for all images
- Proper heading hierarchy (H1-H6)
- ARIA labels for complex components
- Skip navigation links

### Motion & Animation

**Reduced Motion**
- Respect `prefers-reduced-motion` setting
- Essential animations only
- Subtle, purposeful transitions

---

## 🇹🇷 Cultural Considerations

### Turkish Design Preferences

**Visual Elements**
- Prefer warm, welcoming colors
- Family-oriented imagery
- Professional but approachable tone
- Clear hierarchy and organization

**User Behavior**
- High mobile usage (80%+ mobile traffic)
- WhatsApp as primary communication
- Price sensitivity and transparency importance
- Social proof and recommendations valued

**Cultural Symbols**
- Turkish flag colors (red avoided for navigation)
- Crescent and star symbols (subtle usage)
- Turkish architectural elements (optional accents)

### International Considerations

**Tourist-Friendly Design**
- Universal icons and symbols
- Clear English translations
- International contact formats
- Currency clearly marked

---

## 🎯 Implementation Guidelines

### CSS Architecture

**Methodology**: BEM (Block Element Modifier)
```css
/* Block */
.hero { }

/* Element */
.hero__title { }
.hero__subtitle { }
.hero__button { }

/* Modifier */
.hero--dark { }
.hero__button--primary { }
```

### Design Tokens

```css
:root {
  /* Colors */
  --color-primary: #1E3A8A;
  --color-secondary: #F59E0B;

  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 1rem;

  /* Spacing */
  --space-unit: 0.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}
```

### Performance Considerations

**Image Optimization**
- WebP format with JPEG fallback
- Responsive image sizes
- Lazy loading implementation
- Optimal compression settings

**Font Loading**
- `font-display: swap` for web fonts
- Preload critical fonts
- Local font fallbacks

This design system ensures a cohesive, professional, and culturally appropriate website that builds trust with Turkish customers while remaining accessible to international tourists.