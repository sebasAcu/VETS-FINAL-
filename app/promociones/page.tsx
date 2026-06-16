import Link from 'next/link'
import { Check, ShieldCheck, Scissors, Star } from 'lucide-react'

// bgPosition recorta cada perro de la imagen (izq / centro / der)
const promos = [
  {
    tag: 'JORNADA DE\nVACUNACIÓN',
    subtitle: 'Consulta + Vacuna',
    precio: '25.000',
    items: ['Consulta veterinaria', 'Vacuna al día', 'Protección garantizada'],
    cta: 'Reservar Ahora',
    href: '/agenda',
    icon: <ShieldCheck className="w-9 h-9 text-white/30" />,
    bgPosition: '8% center',
  },
  {
    tag: 'GROOMING\nCOMPLETO',
    subtitle: 'Baño + Corte\n+ Perfume',
    precio: '18.000',
    items: ['Baño especializado', 'Corte profesional', 'Perfume incluido'],
    cta: 'Agendar Grooming',
    href: '/agenda',
    icon: <Scissors className="w-9 h-9 text-white/30" />,
    bgPosition: '50% center',
  },
  {
    tag: 'PLAN\nSENIOR',
    subtitle: 'Chequeo Preventivo',
    precio: '28.000',
    items: ['Evaluación completa', 'Exámenes preventivos', 'Recomendación de vacunas'],
    cta: 'Más Información',
    href: '/contacto',
    icon: <Star className="w-9 h-9 text-white/30" />,
    bgPosition: '92% center',
  },
]

export default function PromocionesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-10 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
            Promociones
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-8" style={{ paddingBottom: '120px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((p, i) => (
              <div key={i} className="reveal relative" style={{ paddingBottom: '90px', transitionDelay: `${i * 120}ms` }}>
                <div
                  className="rounded-2xl p-6 h-full relative overflow-visible"
                  style={{ background: '#d93831' }}
                >
                  {/* Icon top right */}
                  <div className="absolute top-4 right-4">{p.icon}</div>

                  {/* Title */}
                  <h2
                    className="text-white font-black text-2xl leading-tight mb-3 whitespace-pre-line pr-14"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {p.tag}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-red-200 text-sm mb-1 whitespace-pre-line">{p.subtitle}</p>
                  <p className="text-red-300 text-xs mb-1">por solo</p>

                  {/* Price — ₡ in span with system font fallback */}
                  <p className="text-white font-black text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>₡</span>
                    {p.precio}
                  </p>

                  {/* Checkmarks */}
                  <ul className="space-y-1.5 mb-6">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-red-100 text-sm">
                        <Check className="w-4 h-4 text-red-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    href={p.href}
                    className="flex items-center justify-between bg-red-950/60 hover:bg-red-950/80 text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm"
                  >
                    <span>{p.cta}</span>
                    <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9z"/>
                    </svg>
                  </Link>

                  {/* Dog image — cropped from perros.png */}
                  <div
                    className="absolute -bottom-20 right-0 w-44 h-56 pointer-events-none"
                    style={{
                      backgroundImage: "url('/perros.png')",
                      backgroundSize: '300% auto',
                      backgroundPosition: p.bgPosition,
                      backgroundRepeat: 'no-repeat',
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section className="py-10" style={{ background: '#d93831' }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <svg className="w-16 h-16 text-red-400/40 flex-shrink-0" fill="currentColor" viewBox="0 0 576 512">
              <path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9z"/>
            </svg>
            <div className="text-white">
              <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-poppins)' }}>
                Promociones válidas por tiempo limitado
              </p>
              <p className="text-red-200 text-base">¡Agenda hoy y cuida a tu mejor amigo!</p>
            </div>
          </div>
          <svg className="w-12 h-12 text-red-400/40 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
        </div>
      </section>
    </>
  )
}
