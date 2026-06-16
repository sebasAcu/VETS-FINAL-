import Link from 'next/link'
import { Calendar, ChevronDown, X, Stethoscope, Scissors, Shield, Pill, Heart, MapPin, Cpu, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Clinic photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        {/* Dark overlay left → transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
        {/* Fallback gradient if no photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-red-950/40 -z-10" />

        <div className="relative z-10 w-full py-16 px-4 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left: text */}
            <div className="max-w-md">
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                CUIDAMOS A TU
              </h1>
              <h1 className="text-5xl lg:text-6xl font-black text-red-500 leading-tight mb-5" style={{ fontFamily: 'var(--font-poppins)' }}>
                MEJOR AMIGO
              </h1>
              <p className="text-white font-semibold text-lg mb-1">Clínica y Farmacia Veterinaria</p>
              <p className="text-gray-300 mb-8">29 años de experiencia y amor por los animales.</p>

              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-7 py-4 rounded-lg font-bold text-base transition-colors mb-10"
              >
                <Calendar className="w-5 h-5" />
                Agendar Cita
              </Link>

              <div className="flex flex-wrap gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-red-400" />
                  </div>
                  <span>Atención<br/>Profesional</span>
                </div>
                <div className="w-px bg-white/20 self-stretch" />
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-red-400" />
                  </div>
                  <span>Tecnología<br/>Avanzada</span>
                </div>
                <div className="w-px bg-white/20 self-stretch" />
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-red-400" />
                  </div>
                  <span>Amor<br/>Garantizado</span>
                </div>
              </div>
            </div>

            {/* Right: appointment form */}
            <div className="w-full max-w-xs lg:max-w-sm bg-red-700 rounded-2xl shadow-2xl overflow-hidden lg:-mr-4">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-white font-bold text-xl mb-0.5" style={{ fontFamily: 'var(--font-poppins)' }}>Agenda tu Cita</h3>
                <p className="text-red-200 text-sm">Rápido, fácil y seguro</p>
              </div>
              <div className="px-6 pb-6 space-y-3">
                <div>
                  <label className="text-red-100 text-xs font-medium block mb-1">Servicio</label>
                  <div className="relative">
                    <select className="w-full bg-white text-gray-700 text-sm px-3 py-3 rounded-lg appearance-none pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300">
                      <option value="">Selecciona un servicio</option>
                      <option>Consulta General</option>
                      <option>Vacunación</option>
                      <option>Cirugía</option>
                      <option>Grooming</option>
                      <option>Farmacia</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-red-100 text-xs font-medium block mb-1">Mascota</label>
                  <div className="relative">
                    <input type="text" placeholder="Nombre de tu mascota" className="w-full bg-white text-gray-700 text-sm px-3 py-3 rounded-lg pr-8 focus:outline-none focus:ring-2 focus:ring-red-300" />
                    <X className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="text-red-100 text-xs font-medium block mb-1">Fecha</label>
                  <input type="date" className="w-full bg-white text-gray-700 text-sm px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
                <div>
                  <label className="text-red-100 text-xs font-medium block mb-1">Hora</label>
                  <div className="relative">
                    <select className="w-full bg-white text-gray-700 text-sm px-3 py-3 rounded-lg appearance-none pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300">
                      <option value="">Selecciona una hora</option>
                      {['8:00 am','9:00 am','10:00 am','11:00 am','2:00 pm','3:00 pm','4:00 pm','5:00 pm'].map(h => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <Link href="/agenda" className="w-full bg-white hover:bg-red-50 text-red-700 font-bold py-3.5 rounded-lg text-center block transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Reservar Cita
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
              Nuestros <span className="text-red-700">Servicios</span>
            </h2>
            <p className="text-gray-500">Atención integral para la salud y bienestar de tu mascota</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Medicina Preventiva', desc: 'Vacunaciones, desparasitaciones y chequeos.' },
              { icon: <Stethoscope className="w-8 h-8" />, title: 'Consulta General', desc: 'Diagnóstico y tratamiento para tu mascota.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5"/></svg>, title: 'Cirugías', desc: 'Procedimientos seguros con equipo avanzado.' },
              { icon: <Pill className="w-8 h-8" />, title: 'Farmacia', desc: 'Medicamentos y productos de calidad.' },
              { icon: <Scissors className="w-8 h-8" />, title: 'Grooming', desc: 'Baño, peluquería y cuidado completo.' },
            ].map((s, i) => (
              <div key={i} className="reveal bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-red-700 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-200">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicios" className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              Ver todos los servicios
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 11.5A6 6 0 0 1 7 6.5a1.5 1.5 0 1 0 0-3 9 9 0 0 0-6 8.5c0 1.657.448 3.21 1.232 4.548L1 17.5l2.232-.744A9 9 0 0 0 10.5 19a1.5 1.5 0 0 0 0-3 6 6 0 0 1-6-4.5z"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="overflow-hidden relative reveal">
        <div
          className="bg-cover bg-center relative"
          style={{ backgroundImage: "url('/promo-perro.jpg')" }}
        >
          <div className="absolute inset-0 bg-red-800/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">Grooming Completo</div>
              <h2 className="text-4xl font-black mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>Baño y Peluquería</h2>
              <p className="text-3xl font-black mb-5">¡AGENDA HOY MISMO!</p>
              <Link href="/grooming" className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-lg font-bold transition-colors">
                Quiero Agendar
              </Link>
            </div>
            <div className="flex-1 text-white text-center lg:text-left">
              <div className="bg-red-900/60 border border-white/20 rounded-2xl px-8 py-6 inline-block">
                <div className="text-sm font-bold text-red-200 mb-1 uppercase tracking-wider">SENIOR</div>
                <div className="text-lg font-black mb-3">7-8 años en adelante</div>
                <div className="text-sm text-red-200 space-y-1">
                  <div>✓ Quíntuple</div>
                  <div>✓ Rabia</div>
                  <div>✓ Bordetella</div>
                </div>
                <Link href="/promociones" className="mt-4 inline-block text-sm underline text-red-200 hover:text-white">Más información</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Cpu className="w-8 h-8 text-red-700" />, title: 'Tecnología', desc: 'Equipos modernos para diagnósticos precisos.' },
              { icon: <Award className="w-8 h-8 text-red-700" />, title: 'Experiencia', desc: '26 años de trayectoria nos respaldan.' },
              { icon: <Heart className="w-8 h-8 text-red-700" />, title: 'Calidad', desc: 'Tratamos a tu mascota como en casa.' },
              { icon: <MapPin className="w-8 h-8 text-red-700" />, title: 'Ubicación', desc: 'Fácil acceso y parqueo disponible.' },
            ].map((s, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex justify-center mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMBERS STRIP ── */}
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: '29+', label: 'Años de experiencia' },
              { num: '10.000+', label: 'Mascotas atendidas' },
              { num: '24/7', label: 'Emergencias' },
              { num: '100%', label: 'Comprometidos' },
            ].map((s, i) => (
              <div key={i} className="reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl font-black mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>{s.num}</div>
                <div className="text-red-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100 reveal">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Tu mascota necesita atención?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">Estamos aquí para ayudarte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agenda" className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              <Calendar className="w-5 h-5" />
              Agendar Cita
            </Link>
            <a href="https://wa.me/50622221234" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
