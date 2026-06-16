'use client'
import { useState } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'

export default function ContactoPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-black" style={{ fontFamily: 'var(--font-poppins)' }}>Contacto</h1>
          <p className="text-red-200 mt-1">Estamos para ayudarte</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Info + Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Información de contacto
              </h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dirección</div>
                    <div className="text-gray-500 text-sm leading-relaxed">
                      De la esquina del ICE, 125m norte, 25m este<br />San José, Costa Rica
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-500 text-sm">(506) 2222-1234</div>
                    <div className="text-gray-500 text-sm">(506) 2222-1234</div>
                    <div className="text-red-700 text-sm font-medium">Emergencias 24/7</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horario de Atención</div>
                    <div className="text-gray-500 text-sm">Lunes a Viernes: 8:00 am - 6:00 pm</div>
                    <div className="text-gray-500 text-sm">Sábado: 8:00 am - 2:00 pm</div>
                    <div className="text-red-700 text-sm font-medium">Emergencias: 24/7</div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center border border-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125474.74808066218!2d-84.19453984179688!3d9.934738699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e343b8e8f071%3A0xa88db9f12aa93e1d!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación VETS"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Envíanos un mensaje
              </h2>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-green-800 text-lg mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-600 text-sm">Te contactaremos a la brevedad posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="(506) 0000-0000"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje <span className="text-red-600">*</span></label>
                    <textarea
                      required
                      rows={5}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
