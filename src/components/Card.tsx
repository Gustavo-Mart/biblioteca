import { Heart } from "lucide-react"
import type { BookDetails } from "@/types"

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

  return (
    <div
      onClick={() => onClick(book)}
      className="bg-neutral-400 rounded-2xl h-full w-full cursor-pointer 
                       transition-all hover:ring-4 ring-blue-500/50 transform hover:scale-[1.02] overflow-clip 
                       relative group"
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
                        ${isFavorite ? 'opacity-100 bg-white/70' : 'opacity-0 group-hover:opacity-100 bg-white/50'}
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

      <p className="py-2 px-4 text-neutral-950 font-semibold text-lg break-words">{book.title}</p>
    </div>
  )
}