import { Heart } from "lucide-react"
import type { BookDetails } from "@/types"
import { motion } from 'framer-motion'
import type { KeyboardEvent } from 'react' // 1. Importe o tipo KeyboardEvent

interface CardProps {
  book: BookDetails
  onClick: (book: BookDetails) => void
  isFavorite: boolean
  onToggleFavorite: () => void
}

export default function Card({ book, onClick, isFavorite, onToggleFavorite }: CardProps) {

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(book)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      whileHover={{ scale: 1.02 }}

      onClick={() => onClick(book)}

      // 3. Adicione os atributos de acessibilidade e foco
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyDown}

      className="bg-primary rounded-xl h-full w-full cursor-pointer
                       hover:ring-4 ring-hover-bg/90 overflow-clip 
                       relative group ring-offset-2 transition-all focus:outline-0 focus:ring-4 focus:ring-hover-bg/90"
    >
      <div className="relative">
        <img
          src={book.imageUrl}
          alt={`Capa do Livro: ${book.title}`}
          className="w-full object-cover"
        />

        <button
          onClick={handleHeartClick}
          className={`
                        absolute top-3 right-3 p-2 rounded-full z-10
                        transition-opacity duration-300
                        ${isFavorite ? 'opacity-100 bg-primary/90' : 'opacity-0 group-hover:opacity-100 bg-primary/80'} ring-offset-2 hover:bg-primary/100 focus:outline-0 focus:ring-2 focus:ring-hover-bg
                    `}
          aria-label={isFavorite ? "Remover Favorito" : "Adicionar Favorito"}
        >
          <Heart
            className={`size-6 transition-colors duration-200`}
            fill={isFavorite ? 'rgb(239, 68, 68)' : 'none'}
            stroke={isFavorite ? 'rgb(239, 68, 68)' : 'rgb(55, 65, 81)'}
          />
        </button>
      </div>

      <p className="py-2 px-4 text-secondary font-momo-trust-sans font-regular text-md xs:text-lg break-words">{book.title}</p>
    </motion.div>
  )
}