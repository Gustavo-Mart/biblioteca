import { SquareStar, Menu, User, Home, type LucideIcon } from "lucide-react"
import { useState } from "react"
import type { View } from '../types'

interface MenuLatProps {
  onViewChange: (view: View) => void
  currentView: View
}

export default function Menu_lat({ onViewChange, currentView }: MenuLatProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const focusedStyle = 'outline-0 focus:ring-2 focus:ring-blue-500'

  const NavButton = ({ Icon, text, view }: { Icon: LucideIcon, text: string, view: View }) => {
    const isSelected = currentView === view

    return (
      <button
        onClick={() => onViewChange(view)}
        className={
          `
          flex items-center text-slate-950 hover:bg-neutral-400 w-full rounded-xl ${isSelected ? 'bg-neutral-400' : 'bg-neutral-300'} ${focusedStyle}
        `}
      >
        <Icon className="size-14 p-1.5 cursor-pointer flex-shrink-0" strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-xl font-semibold whitespace-nowrap'>{text}</span>}
      </button>
    )
  }

  return (
    <div
      className={`
                fixed top-0 left-0 h-screen bg-neutral-200 flex-shrink-0 z-10 py-6 px-2 space-y-2
                transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-64' : 'w-18'}
             `}
    >
      <button
        onClick={toggleMenu}
        className={`
                    flex items-center text-slate-950 hover:bg-neutral-400 bg-neutral-300 w-full rounded-xl
                    ${focusedStyle}
                `}
      >
        <Menu className="size-14 p-1.5 rounded-xl cursor-pointer flex-shrink-0" strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-xl font-semibold whitespace-nowrap'>Fechar Menu</span>}
      </button>

      <div className="space-y-2 pt-4">
        <NavButton Icon={Home} text="Biblioteca" view="Home" />
        <NavButton Icon={SquareStar} text="Favoritos" view="Favorites" />
        <NavButton Icon={User} text="Conta" view="Account" />
      </div>
    </div>
  )
}