import { Heart } from "lucide-react"
interface BookDetails {
  id: number
  title: string
  imageUrl: string
}

interface CardProps {
  book: BookDetails
  onClick: (book: BookDetails) => void
  isFavorite: boolean
  onToggleFavorite: () => void
}

export default function Card({ book, onClick, isFavorite, onToggleFavorite }: CardProps) {
  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // ESSENCIAL: Impede o modal de abrir
    onToggleFavorite(); // Chama a função de toggle
  };

  return (
    <div
      onClick={() => onClick(book)}
      className="bg-neutral-400 rounded-2xl p-2 h-full w-full cursor-pointer 
                       transition-all hover:ring-4 ring-blue-500/50 transform hover:scale-102 
                       relative group"
    >
      <div className="relative">
        <img
          src={book.imageUrl}
          alt={`Capa do Livro: ${book.title}`}
          className="w-full rounded-xl object-cover"
        />
        <button
          onClick={handleHeartClick}
          className={`
                        absolute top-3 right-3 p-2 rounded-full z-10 
                        transition-opacity duration-300
                        // Classe condicional para mostrar no hover ou se já for favorito
                        ${isFavorite ? 'opacity-100 bg-neutral-400' : 'opacity-0 group-hover:opacity-100 bg-white/50'}
                    `}
          aria-label={isFavorite ? "Remover Favorito" : "Adicionar Favorito"}
        >
          <Heart
            className={`size-6 transition-colors duration-200`}
            fill={isFavorite ? 'rgb(239, 68, 68)' : 'none'} 
            // fill vermelho (Tailwind red-500)
            stroke={isFavorite ? 'rgb(239, 68, 68)' : 'rgb(55, 65, 81)'} // stroke cinza ou vermelho
          />
        </button>
      </div>
      <p className="p-2 text-neutral-950 font-semibold">{book.title}</p>
    </div>
  )
}