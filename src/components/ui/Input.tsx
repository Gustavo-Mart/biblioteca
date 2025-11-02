import { Search } from 'lucide-react'
import React from 'react' // Importa o React para os tipos de evento

// 1. Define as props que o componente vai receber
interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input_Biblioteca({ value, onChange }: InputProps) {
  return (
    <div className="flex w-full max-w-lg rounded-2xl focus-within:ring-2 focus-within:ring-hover-bg focus-within:ring-offset-2 transition-all">
      <div className='text-hover-bg size-14 bg-primary p-2 rounded-l-2xl flex items-center justify-center flex-shrink-0'>
        <Search strokeWidth={1.4} />
      </div>
      <input
        className="bg-primary rounded-r-2xl w-fit sm:w-full h-14 text-black py-4 px-2 font-nunito outline-none"
        placeholder='Procure pelo nome do livro'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}