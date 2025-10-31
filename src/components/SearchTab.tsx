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
      <div className="pl-10 space-y-4">
        <h1 className='text-white text-4xl font-bold'>Biblioteca</h1>

        {/* 5. Conecta o Input ao estado */}
        <Input_Biblioteca
          value={searchTerm}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
        />

        {/* 6. Passa as props atualizadas para o Grid */}
        <Grid {...gridProps} />
      </div>
    </>
  )
}