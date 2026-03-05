'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Star, MapPin, Clock, Shield } from 'lucide-react'

// Import Turkish data
import reviewsDataTr from '@/data/reviews-tr.json'
import servicesDataTr from '@/data/services-tr.json'
import contentDataTr from '@/data/content-tr.json'

// Import English data
import reviewsDataEn from '@/data/reviews-en.json'
import servicesDataEn from '@/data/services-en.json'
import contentDataEn from '@/data/content-en.json'

// Types
import { Language } from '@/types'

// Utils
import { createWhatsAppUrl, formatDate } from '@/utils'

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('tr')

  // Get data based on language
  const content = language === 'tr' ? contentDataTr : contentDataEn
  const reviews = language === 'tr' ? reviewsDataTr.reviews : reviewsDataEn.reviews
  const services = language === 'tr' ? servicesDataTr.services : servicesDataEn.services
  const reviewStats = language === 'tr' ? reviewsDataTr.stats : reviewsDataEn.stats

  const whatsappUrl = createWhatsAppUrl(
    '905551234567',
    language === 'tr' ? 'Web sitesinden geliyorum' : 'Coming from website',
    language
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 p-1">
          <button
            onClick={() => setLanguage('tr')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
              language === 'tr'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            TR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
              language === 'en'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-yellow-50 py-20 lg:py-32 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                {content.hero.trustBadge}
              </div>

              <h1 className="heading-1 text-balance">
                {content.hero.title}
              </h1>

              <p className="body-text text-xl">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {content.hero.ctaPrimary}
                </a>

                <a
                  href="tel:+905551234567"
                  className="btn-secondary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {content.hero.ctaSecondary}
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-700">2</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Havalimanı' : 'Airports'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-700">24/7</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Hizmet' : 'Service'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-700">100%</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Güvenilir' : 'Reliable'}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square gradient-taxi rounded-2xl flex items-center justify-center border-2 border-dashed border-primary-300 shadow-lg">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4 filter drop-shadow-lg">🚕</div>
                  <div className="font-medium text-white drop-shadow-md">
                    {language === 'tr' ? 'Popo\'nun Fotoğrafı Buraya' : 'Popo\'s Photo Here'}
                  </div>
                  <div className="text-sm text-white/80 mt-2">
                    {language === 'tr' ? '(Profesyonel fotoğraf eklenecek)' : '(Professional photo to be added)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-secondary-200">
                <div className="text-center text-secondary-600">
                  <div className="text-5xl mb-4">👨‍💼🚗</div>
                  <div className="font-medium">
                    {language === 'tr' ? 'Popo ve Aracı' : 'Popo with Vehicle'}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="heading-2">
                {content.about.title}
              </h2>

              <p className="body-text">
                {content.about.content}
              </p>

              <div className="space-y-4">
                <h3 className="heading-3 text-primary-600">
                  {language === 'tr' ? 'Deneyim:' : 'Experience:'}
                </h3>
                <ul className="space-y-2">
                  {content.about.experience.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="heading-3 text-primary-600">
                  {content.about.whyChoose}
                </h3>
                <ul className="space-y-2">
                  {(language === 'tr' ? content.about.reasons : content.about.reasons).map((reason: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              {language === 'tr'
                ? 'İhtiyaçlarınıza uygun profesyonel taksi hizmetleri'
                : 'Professional taxi services tailored to your needs'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl text-primary-600">
                    {service.icon === 'car' && '🚗'}
                    {service.icon === 'plane' && '✈️'}
                    {service.icon === 'camera' && '📷'}
                    {service.icon === 'briefcase' && '💼'}
                    {service.icon === 'alertTriangle' && '🚨'}
                  </div>
                </div>

                <h3 className="heading-3 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <div className="text-lg font-semibold text-secondary-600">
                  {service.basePrice && `₺${service.basePrice}+`}
                  {service.hourlyRate && `₺${service.hourlyRate}/saat`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              {content.reviews.title}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex text-yellow-400 text-xl">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {reviewStats.averageRating}
              </span>
            </div>
            <p className="text-gray-600">
              {reviewStats.totalReviews} {content.reviews.totalReviews}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {content.reviews.verified}
                  </span>
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  "{review.comment}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{review.customerName}</span>
                    <span>{formatDate(review.date, language)}</span>
                  </div>
                  <div className="text-xs text-secondary-600 mt-1">
                    {review.tripType} • {review.whatsappPartial}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding gradient-taxi text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">
                {content.contact.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MessageCircle className="w-8 h-8 text-whatsapp-500 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-yellow-100">+90 555 123 45 67</div>
                    <div className="text-sm text-yellow-200">
                      {language === 'tr' ? 'Genellikle 5 dakika içinde' : 'Usually within 5 minutes'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-white mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-yellow-100">+90 555 123 45 67</div>
                    <div className="text-sm text-yellow-200">
                      {language === 'tr' ? 'Günlük 06:00-24:00' : 'Daily 06:00-24:00'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-white mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">
                      {language === 'tr' ? 'Çalışma Saatleri' : 'Operating Hours'}
                    </div>
                    <div className="text-yellow-100">
                      {language === 'tr' ? 'Pazartesi-Pazar: 06:00-24:00' : 'Monday-Sunday: 06:00-24:00'}
                    </div>
                    <div className="text-sm text-yellow-200">
                      {language === 'tr' ? 'Acil durumlar 24/7' : 'Emergency 24/7'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-center text-lg font-medium">
                  {content.contact.motto}
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="heading-3 text-white mb-2">
                  {language === 'tr' ? 'Hızlı İletişim' : 'Quick Contact'}
                </h3>
                <p className="text-yellow-200">
                  {language === 'tr'
                    ? 'Rezervasyon için WhatsApp\'ı tercih ediyoruz'
                    : 'We prefer WhatsApp for bookings'}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  className="w-full bg-whatsapp-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  {language === 'tr' ? 'WhatsApp ile İletişim' : 'Contact via WhatsApp'}
                </a>

                <a
                  href="tel:+905551234567"
                  className="w-full bg-white/20 hover:bg-white/30 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all flex items-center justify-center"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {language === 'tr' ? 'Telefon Et' : 'Call Now'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="section-container">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">İstanbul Taxi Service</h3>
            <p className="text-gray-400 mb-4">
              {language === 'tr'
                ? 'İstanbul\'da güvenilir ve profesyonel taksi hizmeti'
                : 'Reliable and professional taxi service in Istanbul'}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-1 md:space-y-0 text-gray-400">
              <span>&copy; 2026 İstanbul Taxi Service. </span>
              <span>
                {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}