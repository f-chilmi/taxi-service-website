# Feature Specifications - Taxi Service Website

This document provides detailed specifications for all features planned across the three development phases, including user stories, acceptance criteria, and technical requirements.

## 📑 Table of Contents

- [MVP Features](#mvp-features)
- [Phase 2 Features](#phase-2-features)
- [Phase 3 Features](#phase-3-features)
- [Feature Dependencies](#feature-dependencies)
- [Technical Considerations](#technical-considerations)

---

## 🚀 MVP Features

### F001: Hero Section

**User Story**: As a potential customer, I want to immediately understand what service is offered and how to contact the driver, so I can quickly decide if this meets my needs.

**Description**: The primary landing section that creates first impressions and drives conversions.

#### Acceptance Criteria
- [ ] Displays professional photo of Popo (optimized for web)
- [ ] Shows clear value proposition in both Turkish and English
- [ ] Prominent WhatsApp contact button (green, recognizable)
- [ ] Language toggle switch (TR/EN) in top navigation
- [ ] Trust indicators visible (experience years, license badge)
- [ ] Mobile-responsive design (looks good on all screen sizes)
- [ ] Loads in under 2 seconds

#### Technical Requirements
- **Image Format**: WebP with JPEG fallback
- **Image Size**: Max 500KB, responsive breakpoints
- **CTA Button**: WhatsApp deep link format: `https://wa.me/[number]?text=[message]`
- **Language Toggle**: LocalStorage to remember preference
- **Typography**: Turkish character support (ğ, ı, ş, ç, ö, ü)

#### Content Requirements
- **Headline (Turkish)**: "Güvenilir ve Profesyonel Taksi Hizmeti"
- **Headline (English)**: "Reliable and Professional Taxi Service"
- **Subheading**: Experience years, service areas
- **Photo**: Professional headshot with vehicle background

---

### F002: About Popo Section

**User Story**: As a customer, I want to learn about the driver's experience and credentials, so I can trust them with my transportation needs.

**Description**: Personal introduction that builds trust and credibility with potential customers.

#### Acceptance Criteria
- [ ] Personal story (50-100 words per language)
- [ ] Key credentials prominently displayed
- [ ] Languages spoken clearly listed
- [ ] Years of experience highlighted
- [ ] Professional certifications mentioned
- [ ] Local area expertise emphasized
- [ ] Warm, approachable tone

#### Technical Requirements
- **Layout**: Two-column on desktop, single-column on mobile
- **Icons**: Professional icons for credentials
- **Typography**: Readable fonts, proper line spacing
- **Accessibility**: Alt text for images, proper headings

#### Content Structure
```
About Popo
├── Personal Introduction (2-3 sentences)
├── Experience & Credentials
│   ├── Years of driving experience
│   ├── Languages spoken (Turkish, English, others)
│   ├── Professional licenses
│   └── Local area knowledge
└── Why Choose Popo
    ├── Safety record
    ├── Customer service focus
    └── Local recommendations
```

---

### F003: Services Section

**User Story**: As a customer, I want to see what transportation services are available, so I can determine if they meet my specific needs.

**Description**: Clear listing of all taxi services offered with brief descriptions.

#### Acceptance Criteria
- [ ] All services listed with descriptive titles
- [ ] Brief description for each service (1-2 lines)
- [ ] Relevant icons for visual appeal
- [ ] Mobile-friendly layout
- [ ] Hover effects for interactivity
- [ ] Clear pricing indicators where applicable

#### Service Categories
1. **City Transportation**
   - Local rides within city limits
   - Shopping trips
   - Medical appointments

2. **Airport Transfers**
   - To/from major airports
   - Flight tracking available
   - Early morning/late night service

3. **Tourist Tours**
   - City sightseeing
   - Historical sites
   - Custom itineraries

4. **Business Transportation**
   - Corporate accounts
   - Meeting transfers
   - Professional service

5. **Emergency Service**
   - 24/7 availability
   - Urgent medical transport
   - Last-minute bookings

#### Technical Requirements
- **Grid Layout**: Responsive CSS Grid or Flexbox
- **Icons**: SVG format, consistent style
- **Performance**: Lazy loading for below-the-fold content
- **SEO**: Structured data markup for services

---

### F004: Basic Pricing Section

**User Story**: As a customer, I want to understand pricing upfront, so I can budget appropriately and avoid surprises.

**Description**: Transparent pricing information to build trust and set expectations.

#### Acceptance Criteria
- [ ] Common routes with fixed prices displayed
- [ ] Payment methods clearly listed
- [ ] "No hidden fees" message prominent
- [ ] Turkish Lira (₺) currency used
- [ ] Price ranges for different service types
- [ ] Contact info for custom quotes

#### Pricing Structure
```
Popular Routes (Fixed Prices)
├── City Center ↔ Airport: ₺150-200
├── Hotel District ↔ Shopping Mall: ₺50-75
├── Train Station ↔ City Center: ₺40-60
└── Popular Tourist Sites: ₺80-120

Service Rates
├── City Transportation: ₺8/km + ₺20 base
├── Airport Transfer: Fixed rates by distance
├── Hourly Rate: ₺120/hour (minimum 2 hours)
└── Night Service (22:00-06:00): +25% surcharge
```

#### Technical Requirements
- **Calculator**: Basic JavaScript fare calculator (optional MVP feature)
- **Responsive Tables**: Mobile-friendly pricing display
- **Currency**: Proper Turkish Lira symbol support
- **Updates**: Easy-to-update pricing structure

---

### F005: Contact Section

**User Story**: As a customer, I want multiple ways to contact the driver and clear information about availability, so I can book rides when needed.

**Description**: Comprehensive contact information with multiple communication channels.

#### Acceptance Criteria
- [ ] WhatsApp button as primary contact method
- [ ] Phone number with clickable tel: link
- [ ] Operating hours clearly displayed
- [ ] Response time commitments shown
- [ ] Simple contact form (optional)
- [ ] Emergency contact option

#### Contact Methods Priority
1. **WhatsApp** (Primary)
   - Instant messaging preferred by Turkish users
   - Deep link with pre-filled message
   - Online status indicator

2. **Phone Call** (Secondary)
   - Direct dialing for immediate needs
   - Available during business hours
   - Voicemail for after-hours

3. **Contact Form** (Tertiary)
   - For detailed inquiries
   - Email notifications to driver
   - Simple validation

#### Technical Requirements
- **WhatsApp Integration**: `https://wa.me/90[number]?text=Merhaba, taksi hizmeti hakkında bilgi almak istiyorum`
- **Phone Link**: `tel:+90[number]` for mobile dialing
- **Form Validation**: Client-side validation, server-side processing
- **Anti-spam**: Basic captcha or rate limiting

#### Availability Display
```
Operating Hours
├── Monday-Friday: 06:00-24:00
├── Saturday-Sunday: 24/7
├── Response Time: Usually within 15 minutes
└── Emergency Service: Available 24/7 with surcharge
```

---

## 🔧 Phase 2 Features

### F006: Vehicle Showcase

**User Story**: As a customer, I want to see the vehicle I'll be riding in, so I can feel confident about cleanliness and comfort.

#### Acceptance Criteria
- [ ] High-quality photos from multiple angles
- [ ] Interior and exterior views
- [ ] Vehicle specifications displayed
- [ ] Safety features highlighted
- [ ] Amenities clearly listed
- [ ] Photo gallery with navigation

#### Technical Requirements
- **Image Gallery**: JavaScript carousel or lightbox
- **Image Optimization**: Multiple sizes for different devices
- **Loading**: Progressive image loading
- **Accessibility**: Keyboard navigation, screen reader support

---

### F007: Customer Reviews System

**User Story**: As a potential customer, I want to read reviews from other passengers, so I can trust the service quality.

#### Acceptance Criteria
- [ ] Display 5+ customer testimonials
- [ ] Star rating system (1-5 stars)
- [ ] Customer photos (with permission)
- [ ] Review submission form for new customers
- [ ] Google Reviews integration
- [ ] Average rating calculation

#### Technical Requirements
- **Review Storage**: JSON file or simple database
- **Rating Display**: CSS star rating component
- **Form Processing**: Server-side review submission
- **Moderation**: Admin approval for new reviews

---

### F008: Service Areas Map

**User Story**: As a customer, I want to see which areas are covered, so I know if service is available for my location.

#### Acceptance Criteria
- [ ] Interactive Google Maps integration
- [ ] Service area boundaries clearly marked
- [ ] Popular destinations highlighted
- [ ] Distance estimates from key locations
- [ ] Mobile-friendly map controls

#### Technical Requirements
- **Google Maps API**: Maps JavaScript API
- **Custom Markers**: Service area boundaries
- **Responsive**: Mobile-optimized map size
- **Performance**: Lazy loading, efficient API usage

---

## 🚀 Phase 3 Features

### F009: Online Booking System

**User Story**: As a customer, I want to book rides online in advance, so I can guarantee transportation for important appointments.

#### Acceptance Criteria
- [ ] Date and time picker for future bookings
- [ ] Route selection with pricing
- [ ] Customer information form
- [ ] Booking confirmation system
- [ ] WhatsApp confirmation messages
- [ ] Booking management interface

#### Technical Requirements
- **Backend**: Node.js/Express or similar
- **Database**: PostgreSQL or MongoDB
- **Authentication**: User accounts and sessions
- **Notifications**: WhatsApp API integration
- **Calendar**: Integration with driver's schedule

---

### F010: Simple Review Display System (No Authentication)

**User Story**: As a potential customer, I want to see authentic reviews from real customers with their privacy protected, so I can trust the service quality.

**Description**: Display customer reviews with censored contact information to maintain privacy while showing authenticity.

#### Acceptance Criteria
- [ ] Display customer reviews with star ratings
- [ ] Show partial WhatsApp numbers (e.g., "555***67")
- [ ] Customer names with last name initial only (e.g., "Ayşe K.")
- [ ] Review date and trip type
- [ ] No customer accounts or login required
- [ ] Admin can add reviews manually via JSON file

#### Technical Requirements (MVP)
- **Storage**: JSON file (`/data/reviews.json`)
- **Display**: Static rendering with Next.js
- **Privacy**: Automated censoring of sensitive data
- **Admin**: Direct file editing for new reviews
- **Validation**: Review content moderation

#### Sample Review Data Structure
```json
{
  "reviews": [
    {
      "id": "r001",
      "customerName": "Ayşe K.",
      "whatsappPartial": "555***67",
      "rating": 5,
      "comment": "Çok güvenilir ve dakik. Havalimanı transferi mükemmeldi!",
      "tripType": "Airport Transfer",
      "date": "2024-01-15",
      "verified": true
    }
  ]
}
```

#### Future Enhancement (Phase 3)
- Simple review submission form
- Email verification for authenticity
- Auto-censoring system

---

## 🔗 Feature Dependencies

### Dependency Matrix
```
Feature Dependencies:
├── Hero Section (F001) → None (standalone)
├── About Section (F002) → None (standalone)
├── Services Section (F003) → None (standalone)
├── Pricing Section (F004) → Services Section (F003)
├── Contact Section (F005) → None (standalone)
├── Vehicle Showcase (F006) → None (standalone)
├── Reviews System (F007) → None (standalone)
├── Service Map (F008) → Services Section (F003)
├── Booking System (F009) → Contact Section (F005), Pricing (F004)
└── Account System (F010) → Booking System (F009)
```

### Integration Points
- **Language System**: All features must support Turkish/English
- **Contact Integration**: All features should link to contact methods
- **Mobile Optimization**: All features must be mobile-responsive
- **Performance**: All features must meet load time requirements

---

## 🛠️ Technical Considerations

### Performance Requirements
- **Page Load**: < 3 seconds on mobile
- **Image Loading**: Progressive/lazy loading
- **Bundle Size**: < 1MB total JavaScript
- **Caching**: Browser and CDN caching strategy

### Accessibility Requirements
- **WCAG 2.1 AA**: Compliance with accessibility standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and alt text
- **Color Contrast**: Minimum 4.5:1 contrast ratio

### Security Requirements
- **Data Protection**: HTTPS everywhere
- **Form Security**: CSRF protection, input validation
- **Privacy**: GDPR compliance for EU tourists
- **Contact Security**: No exposed email addresses

### Browser Support
- **Modern Browsers**: Chrome, Safari, Firefox, Edge (last 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation**: Basic functionality on older browsers

### Internationalization
- **Languages**: Turkish (primary), English (secondary)
- **Character Support**: Full Turkish alphabet support
- **RTL Support**: Future consideration for Arabic
- **Cultural Adaptation**: Local customs and preferences

This feature specification ensures all team members understand the exact requirements and can build a cohesive, user-friendly taxi service website.