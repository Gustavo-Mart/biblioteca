import type { BookDetails, GridControlProps } from '../types'
import Card from "./Card"
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
    <div className="w-full h-fit bg-neutral-300/10 rounded-2xl p-6">
      <h2 className='text-white text-3xl'>Livros: </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {books.map(book => (
          <Card
            key={book.id}
            book={book}
            onClick={onCardClick}
            isFavorite={favoriteIds.has(book.id)}
            onToggleFavorite={() => onToggleFavorite(book.id)}
          />
        ))}
        {books.length === 0 && (
          <p className="col-span-5 text-neutral-400 text-center py-10">
            Nenhum livro para exibir.
          </p>
        )}
      </div>
    </div>
  );
}