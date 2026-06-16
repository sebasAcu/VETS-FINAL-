import { Heart, Award, Users, Clock } from 'lucide-react'

const values = [
  { icon: <Heart className="w-7 h-7" />, title: 'Amor por los animales', desc: 'Tratamos a cada mascota con el mismo cariño que trataríamos a un familiar.' },
  { icon: <Award className="w-7 h-7" />, title: 'Profesionalismo', desc: 'Médicos veterinarios altamente capacitados, respeto y dedicación.' },
  { icon: <Users className="w-7 h-7" />, title: 'Compromiso', desc: 'Trabajamos con ética, respeto y dedicación en cada caso.' },
  { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Innovación', desc: 'Equipos modernos para diagnósticos más precisos y mejores tratamientos.' },
]

const stats = [
  { number: '29+', label: 'Años de experiencia' },
  { number: '10.000+', label: 'Mascotas atendidas' },
  { number: '24/7', label: 'Emergencias' },
  { number: '100%', label: 'Comprometidos' },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-black" style={{ fontFamily: 'var(--font-poppins)' }}>Nosotros</h1>
          <p className="text-red-200 mt-1">Conoce nuestra historia y equipo</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div className="reveal-left">
              <h2 className="text-4xl font-black text-gray-900 mb-5" style={{ fontFamily: 'var(--font-poppins)' }}>
                Más de <span className="text-red-700">29 años</span> cuidando mascotas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En VETS Clínica y Farmacia Veterinaria hemos dedicado nuestra experiencia a brindar
                atención médica profesional y humana para perros y gatos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro compromiso es tu bienestar y el de tu mejor amigo. Con tecnología avanzada
                y un equipo apasionado, cada visita es una experiencia de confianza y cuidado.
              </p>
            </div>
            <div className="reveal-right rounded-2xl overflow-hidden h-72 shadow-lg">
              <img
                src="/clinica.jpg"
                alt="Clínica VETS"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-center text-gray-900 mb-10" style={{ fontFamily: 'var(--font-poppins)' }}>
              Nuestros <span className="text-red-700">Valores</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="reveal text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-red-700 flex justify-center mb-4">{v.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-black mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{s.number}</div>
                <div className="text-red-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
            Nuestras <span className="text-red-700">Instalaciones</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center text-gray-400 text-sm text-center p-4">
                <div>
                  <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                  Foto {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
