import Link from 'next/link'
import { Calendar, Stethoscope, Shield, Scissors, Pill, Heart, Phone, Plus } from 'lucide-react'

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Consulta General',
    desc: 'Evaluación completa, diagnóstico, desparasitación y recomendaciones médicas.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Vacunación',
    desc: 'Esquemas de vacunación para cachorros, adultos y senior.',
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Grooming',
    desc: 'Baño, corte, limpieza de oídos, uñas y más.',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"/></svg>,
    title: 'Cirugías',
    desc: 'Procedimientos seguros y equipamiento especializado.',
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: 'Farmacia',
    desc: 'Medicamentos, suplementos y productos veterinarios.',
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Emergencias 24/7',
    desc: 'Atención inmediata para casos urgentes.',
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden" style={{ background: '#d93831', minHeight: '380px' }}>

        <div className="flex items-stretch min-h-[380px]">
          {/* Left: text */}
          <div className="flex-1 flex flex-col justify-center px-10 py-14 z-10 relative">
            <p className="font-bold text-white/70 text-sm mb-4 uppercase tracking-wider">Servicios</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5" style={{ fontFamily: 'var(--font-poppins)' }}>
              Cuidamos la salud de tu<br />mascota en cada etapa
            </h1>
            <p className="text-red-200 text-lg leading-relaxed max-w-lg">
              Consultas, vacunación, cirugía, farmacia veterinaria y grooming profesional.
            </p>
          </div>

          {/* Right: vet photo — fills half the banner */}
          <div className="hidden lg:block relative w-1/2 flex-shrink-0">
            <img
              src="/vet-servicios.png"
              alt="Veterinaria"
              className="absolute inset-0 w-full h-full object-cover object-left"
              style={{ mixBlendMode: 'normal' }}
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="reveal border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-red-700 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Tu mascota necesita atención? Estamos aquí para ayudar
          </p>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 px-7 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            Agendar Cita
          </Link>
        </div>
      </section>
    </>
  )
}
