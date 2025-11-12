import { SquareStar, type LucideIcon, X, CalendarClock, Library, MenuIcon } from "lucide-react"
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

  const focusedStyle = 'outline-0 focus:ring-2 focus:ring-hover-bg focus:ring-offset-2'
  const hoverStyle = 'font-cutive-mono text-primary hover:text-black hover:bg-bg border-b-2 border-b-primary '

  const NavButton = ({ Icon, text, view }: { Icon: LucideIcon, text: string, view: View }) => {
    return (
      <button
        onClick={() => {
          onViewChange(view)
          setIsMenuOpen(false)
        }}
        className={`
          flex items-center justify-between w-full transition-all ${focusedStyle} ${hoverStyle}
        `}
      >
        <Icon className="size-14 sm:size-18 p-1.5 cursor-pointer flex-shrink-0" strokeWidth={1.2} />
        <span className='p-2 text-3xl sm:text-5xl whitespace-nowrap'>{text}</span>
      </button>
    )
  }

  return (
    <>
      {/* Botão Flutuante (Abrir Menu) */}
      <button
        onClick={toggleMenu}
        className={`
          fixed top-4 right-4 z-50 p-2 flex flex-row items-center
          bg-primary text-slate-950 rounded-2xl shadow-lg
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:bg-hover-bg
          ${focusedStyle}
          ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
        `}
        aria-label="Abrir menu"
      >
        <MenuIcon className="size-12" strokeWidth={1.4} />
      </button>

      {/* Painel do Menu (Slider) */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-md z-40 m-auto flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center space-y-2 gap-2">
          <button
            onClick={toggleMenu}
            className={`
            flex items-center justify-between w-fit transition-all ${focusedStyle} ${hoverStyle}
          `}
          >
            <X className="size-14 sm:size-18 p-1.5 cursor-pointer flex-shrink-0" strokeWidth={1} />
            <span className='p-2 text-3xl sm:text-5xl whitespace-nowrap'>Fechar Menu</span>
          </button>

          <NavButton Icon={Library} text="Biblioteca" view="Home"/>
          <NavButton Icon={SquareStar} text="Favoritos" view="Favorites" />
          <NavButton Icon={CalendarClock} text="Reservas" view="Account" />
        </div>
      </div>
    </>
  )
}