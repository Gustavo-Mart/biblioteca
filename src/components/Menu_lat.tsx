import { SquareStar, FileSearch, Menu, User } from "lucide-react";
import { useState } from "react";

function Menu_lat() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  const focusedStyle = 'outline-0 focus:ring-2 focus:ring-blue-500';
  return (
    <div id='menu' className={`fixed top-0 left-0 h-screen bg-neutral-200 flex-shrink-0 z-10 py-6 px-2 space-y-2 transition-transform ${isMenuOpen ? 'w-64' : 'w-fit'}`}>
      <button onClick={toggleMenu} className={`flex items-center text-slate-950 hover:bg-neutral-400 bg-neutral-300 w-full rounded-xl ${focusedStyle}`}>
        <Menu className="size-14 p-1.5 rounded-xl cursor-pointer " strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-2xl '>Fechar Menu</span>}
      </button>

      <button className={`flex items-center text-slate-950 hover:bg-neutral-400 bg-neutral-300 w-full rounded-xl ${focusedStyle}`}>
        <FileSearch className='size-14 p-1.5 cursor-pointer ' strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-2xl '>Pesquisar</span>}
      </button>

      <button className={`flex items-center text-slate-950 hover:bg-neutral-400 bg-neutral-300 w-full rounded-xl ${focusedStyle}`}>
        <SquareStar className='size-14 p-1.5 cursor-pointer' strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-2xl '>Favoritos</span>}
      </button>

      <button className={`flex items-center text-slate-950 hover:bg-neutral-400 bg-neutral-300 w-full rounded-xl ${focusedStyle}`}>
        <User className='size-14 p-1.5 rounded-xl cursor-pointer' strokeWidth={1} />
        {isMenuOpen && <span className='p-2 text-2xl '>Conta</span>}
      </button>
    </div>
  )
}

export default Menu_lat