import { Search } from "lucide-react";

function Input() {
  return (
    <div className="flex w-full max-w-lg rounded-2xl focus-within:ring-4 focus-within:ring-blue-500/50 focus-within:ring-offset transition-all">
      <div className='text-slate-950 size-14 bg-neutral-300 rounded-l-2xl flex items-center justify-center flex-shrink-0'>
        <Search strokeWidth={1}/>
      </div>
      <input
        className="bg-neutral-300 rounded-r-2xl w-full h-14 text-blap-4 font-sans outline-none px-2 placeholder:text-neutral-600 text-neutral-950" 
        placeholder='Procure pelo nome do livro, Autor, ISBN...'
      />
    </div>
  )
}
export default Input