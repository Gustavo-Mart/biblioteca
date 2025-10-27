import Grid from './Grid'
import type { BookDetails } from '../types'

interface TabProps {
  books: BookDetails[]
  onCardClick: (bookDetails: BookDetails) => void
  onToggleFavorite: (bookId: number) => void
  favoriteIds: Set<number>
}

export default function FavoriteTab(props: TabProps) {
  return (
    <>
      <div className="pl-10 space-y-4">
        <h1 className='text-white text-4xl font-bold'>Meus Favoritos</h1>
        <Grid
          books={props.books}
          onCardClick={props.onCardClick}
          onToggleFavorite={props.onToggleFavorite}
          favoriteIds={props.favoriteIds}
        />
      </div>
    </>
  )
}