'use client'
import { useState } from 'react'
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const DAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']
const TIMES = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export default function AgendaPage() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = (getFirstDayOfMonth(year, month) + 6) % 7

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    setSelectedDay(null)
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    setSelectedDay(null)
  }

  return (
    <>
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-black" style={{ fontFamily: 'var(--font-poppins)' }}>Agenda tu Cita</h1>
          <p className="text-red-200 mt-1">Rápido, fácil y seguro</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>Información de la cita</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Servicio <span className="text-red-600">*</span></label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer">
                    <option value="">Selecciona un servicio</option>
                    <option>Consulta General</option>
                    <option>Vacunación</option>
                    <option>Cirugía</option>
                    <option>Grooming</option>
                    <option>Farmacia</option>
                    <option>Emergencia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de tu mascota <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    placeholder="Ej: Firulais"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de mascota <span className="text-red-600">*</span></label>
                  <div className="flex gap-4">
                    {['Perro', 'Gato', 'Otro'].map(t => (
                      <label key={t} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tipo" value={t} className="accent-red-700" />
                        <span className="text-sm text-gray-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                    <input
                      type="text"
                      readOnly
                      value={selectedDay ? `${selectedDay}/${month + 1}/${year}` : ''}
                      placeholder="Selecciona una fecha"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                    <input
                      type="text"
                      readOnly
                      value={selectedTime || ''}
                      placeholder="Selecciona una hora"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del propietario <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp <span className="text-red-600">*</span></label>
                  <input
                    type="tel"
                    placeholder="(506) 0000-0000"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Agendar Ahora
                </button>
              </div>
            </div>

            {/* Calendar + Times */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: 'var(--font-poppins)' }}>Selecciona fecha y hora</h2>

                {/* Calendar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer">
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                      {MONTHS[month]} {year}
                    </span>
                    <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer">
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 mb-2">
                    {DAYS.map(d => (
                      <div key={d} className="text-center text-xs font-bold text-gray-500 py-1">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                      const isSelected = selectedDay === day
                      const isPast = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate())
                      return (
                        <button
                          key={day}
                          onClick={() => !isPast && setSelectedDay(day)}
                          disabled={isPast}
                          className={`aspect-square text-sm rounded-lg flex items-center justify-center transition-colors cursor-pointer
                            ${isSelected ? 'bg-red-700 text-white font-bold' : ''}
                            ${isToday && !isSelected ? 'bg-red-100 text-red-700 font-bold' : ''}
                            ${!isSelected && !isToday && !isPast ? 'hover:bg-gray-100 text-gray-700' : ''}
                            ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                          `}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 mb-3">Horarios disponibles</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {TIMES.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`text-xs py-2 rounded-lg border font-medium transition-colors cursor-pointer
                          ${selectedTime === t
                            ? 'bg-red-700 text-white border-red-700'
                            : 'border-gray-200 text-gray-700 hover:border-red-500 hover:text-red-700'
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/50622221234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                ¿Necesitas ayuda? Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
