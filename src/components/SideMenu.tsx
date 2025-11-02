import { SquareStar, Home, type LucideIcon, X, ArrowLeftFromLine, CalendarClock } from "lucide-react"
import { useState } from "react"
import type { View } from '../types'

interface MenuLatProps {
  onViewChange: (view: View) => void
  currentView: View
}

export default function SideMenu({ onViewChange }: MenuLatProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const focusedStyle = 'outline-0 focus:ring-2 focus:ring-blue-500'

  const NavButton = ({ Icon, text, view }: { Icon: LucideIcon, text: string, view: View }) => {

    return (
      <button
        onClick={() => {
          onViewChange(view)
          setIsMenuOpen(false)
        }}
        className={`
          flex items-center text-slate-950 hover:bg-neutral-400 w-full rounded-xl bg-neutral-300 transition-all ${focusedStyle}
        `}
      >
        <Icon className="size-14 p-1.5 cursor-pointer flex-shrink-0" strokeWidth={1} />
        <span className='p-2 text-xl font-semibold whitespace-nowrap'>{text}</span>
      </button>
    )
  }

  return (
    <>
      {/* Botão Flutuante (Abrir Menu) */}
      <button
        onClick={toggleMenu}
        className={`
          fixed top-8 right-6 z-50 p-2 flex flex-row items-center
          bg-neutral-300 text-slate-950 rounded-2xl shadow-lg
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:bg-neutral-400
          ${focusedStyle}
          ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
        `}
        aria-label="Abrir menu"
      >
        <ArrowLeftFromLine className="size-8" strokeWidth={1.4} />
        <span className="pl-1 text-md sm:text-lg">Abrir</span>
      </button>

      {/* Overlay (Fundo Escuro) */}
      <div
        onClick={toggleMenu}
        className={`
          fixed inset-0 bg-black/50 z-30
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Painel do Menu (Slider) */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-neutral-200 flex-shrink-0 z-40 py-10 px-2 space-y-2 transition-transform duration-300 ease-in-out w-64
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={toggleMenu}
          className={`
            flex items-center text-white hover:bg-neutral-300 hover:text-slate-950 bg-neutral-800 w-full rounded-xl transition-all
            ${focusedStyle}
          `}
        >
          <X className="size-14 p-1.5 rounded-xl cursor-pointer flex-shrink-0" strokeWidth={1} />
          <span className='p-2 text-xl font-semibold whitespace-nowrap'>Fechar Menu</span>
        </button>

        <div className="space-y-2 pt-2">
          <NavButton Icon={Home} text="Biblioteca" view="Home" />
          <NavButton Icon={SquareStar} text="Favoritos" view="Favorites" />
          <NavButton Icon={CalendarClock} text="Reservas" view="Account" />
        </div>
      </div>
    </>
  )
}