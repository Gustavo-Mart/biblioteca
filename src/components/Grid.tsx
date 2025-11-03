import type { BookDetails, GridControlProps } from '../types'
import Card from "./ui/Card"
import { AnimatePresence } from 'framer-motion' // 1. Importar AnimatePresence

interface GridProps extends GridControlProps {
  books: BookDetails[]
}

export default function Grid({
  books,
  onCardClick,
  onToggleFavorite,
  favoriteIds
}: GridProps) {

  return (
    <div className="w-full h-fit bg-secondary/30 rounded-2xl p-4">
      <h2 className='text-primary text-3xl'>Livros: </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mt-6">
        <AnimatePresence>
          {books.map(book => (
            <Card
              key={book.id}
              book={book}
              onClick={onCardClick}
              isFavorite={favoriteIds.has(book.id)}
              onToggleFavorite={() => onToggleFavorite(book.id)}
            />
          ))}
        </AnimatePresence>
        
        {books.length === 0 && (
          <p className="col-span-5 text-neutral-400 text-center py-10">
            Nenhum livro para exibir
          </p>
        )}
      </div>
    </div>
  )
}