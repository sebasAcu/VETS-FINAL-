import Link from 'next/link'
import { Calendar } from 'lucide-react'

const posts = [
  {
    title: 'Guía de vacunación para cachorros',
    excerpt: 'Todo lo que necesitas saber sobre el esquema de vacunación ideal para tu cachorro desde los primeros meses de vida.',
    date: '10 Junio, 2024',
    category: 'Salud',
  },
  {
    title: '¿Con qué frecuencia debe ir tu mascota al veterinario?',
    excerpt: 'Conoce la frecuencia ideal de visitas veterinarias según la edad y condición de salud de tu mascota.',
    date: '5 Mayo, 2024',
    category: 'Bienestar',
  },
  {
    title: 'Consejos para el cuidado dental de tu perro',
    excerpt: 'La salud dental es fundamental. Aprende cómo mantener los dientes de tu perro limpios y saludables.',
    date: '20 Abril, 2024',
    category: 'Cuidado',
  },
  {
    title: 'Nutrición felina: lo que debes saber',
    excerpt: 'Los gatos tienen necesidades nutricionales únicas. Descubre cómo alimentar a tu gato correctamente.',
    date: '15 Marzo, 2024',
    category: 'Nutrición',
  },
  {
    title: 'Señales de que tu mascota necesita atención urgente',
    excerpt: 'Aprende a reconocer las señales de alerta que indican que tu mascota necesita atención veterinaria inmediata.',
    date: '1 Marzo, 2024',
    category: 'Emergencias',
  },
  {
    title: 'Beneficios del grooming profesional',
    excerpt: 'Más allá de la estética, el grooming profesional contribuye a la salud y bienestar de tu mascota.',
    date: '20 Febrero, 2024',
    category: 'Grooming',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-black" style={{ fontFamily: 'var(--font-poppins)' }}>Blog</h1>
          <p className="text-red-200 mt-1">Consejos y noticias para el cuidado de tu mascota</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <p className="text-xs">Imagen del artículo</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <button className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors">
                    Leer más →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
