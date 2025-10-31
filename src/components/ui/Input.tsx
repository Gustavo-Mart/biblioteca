import { Search } from 'lucide-react'
import React from 'react' // Importa o React para os tipos de evento

// 1. Define as props que o componente vai receber
interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input_Biblioteca({ value, onChange }: InputProps) {
  return (
    <div className="flex w-full max-w-lg rounded-2xl focus-within:ring-2 focus-within:ring-neutral-400 focus-within:ring-offset-2 transition-all">
      <div className='text-slate-950 size-14 bg-neutral-300 p-2 rounded-l-2xl flex items-center justify-center flex-shrink-0'>
        <Search strokeWidth={1} />
      </div>
      <input
        className="bg-neutral-300 rounded-r-2xl w-full h-14 text-black p-4 font-sans outline-none"
        placeholder='Procure pelo nome do livro, Autor, ISBN...'
        // 2. Conecta o estado (value) e o evento (onChange)
        value={value}
        onChange={onChange}
      />
    </div>
  )
}