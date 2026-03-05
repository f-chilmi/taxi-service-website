export interface Review {
  id: string
  customerName: string
  whatsappPartial: string
  rating: number
  comment: string
  tripType: string
  date: string
  verified: boolean
}

export interface ReviewStats {
  totalReviews: number
  averageRating: number
  ratingDistribution: {
    [key: string]: number
  }
}

export interface ReviewsData {
  reviews: Review[]
  stats: ReviewStats
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  basePrice: number
  perKmPrice: number | null
  hourlyRate?: number
  surcharge?: number
  features: string[]
}

export interface ServicesData {
  services: Service[]
}

export interface Route {
  route: string
  price: string
}

export interface Rate {
  service: string
  rate: string
}

export interface Schedule {
  day: string
  hours: string
}

export interface ResponseTime {
  method: string
  time: string
}

export interface ContentData {
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trustBadge: string
  }
  about: {
    title: string
    content: string
    experience: string[]
    whyChoose: string
    reasons: string[]
  }
  pricing: {
    title: string
    subtitle: string
    popularRoutes: string
    serviceRates: string
    paymentMethods: string
    routes: Route[]
    rates: Rate[]
    payments: string[]
  }
  contact: {
    title: string
    hours: string
    channels: string
    response: string
    motto: string
    schedule: Schedule[]
    responseTime: ResponseTime[]
  }
  reviews: {
    title: string
    subtitle: string
    averageRating: string
    totalReviews: string
    verified: string
  }
}

export type Language = 'tr' | 'en'