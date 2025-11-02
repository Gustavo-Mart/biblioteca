import Grid from './Grid'
import type { BookDetails, GridControlProps, ModalProps } from '../types'
import Input_Biblioteca from './ui/Input'
import { useState, useMemo, type SetStateAction } from 'react'

interface TabProps extends GridControlProps, ModalProps {
  books: BookDetails[]
}

export default function SearchTab(props: TabProps) {

  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = useMemo(() => {
    if (!searchTerm) {
      return props.books
    }
    
    return props.books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, props.books])

  const gridProps = {
    books: filteredBooks,
    onCardClick: props.onCardClick,
    onToggleFavorite: props.onToggleFavorite,
    favoriteIds: props.favoriteIds,
  }

  return (
    <>
      <div className="mt-2 space-y-2">
        <p className='text-white pt-2 text-4xl xs:text-6xl font-bold'>Biblioteca</p>

        <Input_Biblioteca
          value={searchTerm}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
        />

        <Grid {...gridProps} />
      </div>
    </>
  )
}