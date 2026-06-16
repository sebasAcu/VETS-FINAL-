'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar } from 'lucide-react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/agenda', label: 'Agenda tu Cita' },
  { href: '/promociones', label: 'Promociones' },
  { href: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav style={{ backgroundColor: '#d93831' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <Link href="/">
            <img src="/logo.png" alt="VETS" style={{ height: '220px', width: 'auto', display: 'block' }} />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: '#fff',
                  borderBottom: pathname === l.href ? '3px solid #fff' : '3px solid transparent',
                  paddingBottom: '4px',
                }}
                className="text-sm font-semibold px-4 py-2 transition-all hover:opacity-80"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="/agenda"
            className="hidden lg:flex items-center gap-2 bg-white hover:bg-red-50 px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
            style={{ color: '#d93831' }}
          >
            <Calendar className="w-4 h-4" />
            Agendar Cita
          </Link>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white hover:opacity-80 rounded-lg" aria-label="Menú">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/agenda" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 bg-white py-3 rounded-lg font-bold" style={{ color: '#7f1d1d' }}>
              <Calendar className="w-4 h-4" />
              Agendar Cita
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
