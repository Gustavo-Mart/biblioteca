import Grid from './Grid'
import type { BookDetails, GridControlProps, ModalProps } from '../types'
import Input_Biblioteca from './Input'


interface TabProps extends GridControlProps, ModalProps {
  books: BookDetails[]
} 

export default function SearchTab(props: TabProps) {
  const gridProps = {
    books: props.books,
    onCardClick: props.onCardClick,
    onToggleFavorite: props.onToggleFavorite,
    favoriteIds: props.favoriteIds,
  }
  return (
    <>
      <div className="pl-10 space-y-4">
        <h1 className='text-white text-4xl font-bold'>Biblioteca</h1>
        <Input_Biblioteca />
        <Grid {...gridProps} />
      </div>
    </>
  )
}