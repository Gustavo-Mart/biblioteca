import Grid from './Grid'
import type { BookDetails, GridControlProps, ModalProps } from '../types'

interface TabProps extends GridControlProps, ModalProps {
  books: BookDetails[]
}

export default function FavoriteTab(props: TabProps) {
  const gridProps = {
    books: props.books,
    onCardClick: props.onCardClick,
    onToggleFavorite: props.onToggleFavorite,
    favoriteIds: props.favoriteIds,
  }
  return (
    <>
      <div className="mt-2 space-y-4">
        <p className='text-white text-4xl xs:text-6xl font-bold text-justify'>Favoritos</p>
        <Grid {...gridProps} />
      </div>
    </>
  )
}