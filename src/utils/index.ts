import { Language } from '@/types'


/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '')

  // Check if it's a Turkish number
  if (cleaned.startsWith('90')) {
    const number = cleaned.slice(2)
    return `+90 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8)}`
  }

  // Default formatting for Turkish mobile numbers
  if (cleaned.length === 10) {
    return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`
  }

  return phone
}

/**
 * Create WhatsApp URL with pre-filled message
 */
export function createWhatsAppUrl(
  phoneNumber: string,
  message: string,
  language: Language = 'tr'
): string {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')
  const formattedNumber = cleanedNumber.startsWith('90') ? cleanedNumber : `90${cleanedNumber}`

  const messages = {
    tr: `Merhaba! Taksi hizmeti hakkında bilgi almak istiyorum. ${message}`,
    en: `Hello! I would like information about taxi service. ${message}`
  }

  const finalMessage = messages[language] || messages.tr

  return `https://wa.me/${formattedNumber}?text=${encodeURIComponent(finalMessage)}`
}

/**
 * Calculate estimated fare
 */
export function calculateFare(
  distance: number,
  serviceType: 'city' | 'airport' | 'hourly' | 'emergency',
  isNightTime: boolean = false
): number {
  let baseFare = 0
  let perKmRate = 0

  switch (serviceType) {
    case 'city':
      baseFare = 20
      perKmRate = 8
      break
    case 'airport':
      return 150 // Fixed rate for airport
    case 'hourly':
      return 120 // Per hour rate
    case 'emergency':
      baseFare = 30
      perKmRate = 12
      break
  }

  let totalFare = baseFare + (distance * perKmRate)

  // Night surcharge (22:00-06:00)
  if (isNightTime) {
    totalFare *= 1.25
  }

  return Math.round(totalFare)
}

/**
 * Generate star rating display
 */
export function generateStarRating(rating: number): string {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return '★'.repeat(fullStars) +
         (hasHalfStar ? '☆' : '') +
         '☆'.repeat(emptyStars)
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, language: Language = 'tr'): string {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const locale = language === 'tr' ? 'tr-TR' : 'en-US'
  return date.toLocaleDateString(locale, options)
}

/**
 * Validate Turkish phone number
 */
export function isValidTurkishPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')

  // Turkish mobile numbers start with 5xx and are 10 digits long
  // Or with country code: 905xxxxxxxx (13 digits)
  return /^(5[0-9]{9}|905[0-9]{9})$/.test(cleaned)
}

/**
 * Get current time in Istanbul timezone
 */
export function getIstanbulTime(): Date {
  return new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Istanbul"}))
}

/**
 * Check if current time is night time (22:00-06:00)
 */
export function isNightTime(): boolean {
  const now = getIstanbulTime()
  const hour = now.getHours()
  return hour >= 22 || hour < 6
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  waitFor: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }
}