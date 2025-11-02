import './App.css'
import Menu_lat from './components/SideMenu'
import SearchTab from './components/SearchTab'
import FavoriteTab from './components/FavoriteTab'
import AccountTab from './components/AccountTab'
import { useState, useCallback, useMemo, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { BOOKS_DATA } from './data'
import type { BookDetails, View, GridControlProps, ModalProps } from './types'
import Modal_Comp from './components/ui/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null)
  const [favoriteBookIds, setFavoriteBookIds] = useState<Set<number>>(() => {
    const stored = localStorage.getItem('favoriteBookIds')
    return stored ? new Set(JSON.parse(stored) as number[]) : new Set()
  })
  const [reservedBooks, setReservedBooks] = useState<Map<number, Date>>(() => {
    const stored = localStorage.getItem('reservedBooks')
    if (stored) {
      const parsed = JSON.parse(stored) as [number, string][]
      return new Map(parsed.map(([id, dateStr]) => [id, new Date(dateStr)]))
    }
    return new Map()
  })

  useEffect(() => {
    localStorage.setItem('favoriteBookIds', JSON.stringify(Array.from(favoriteBookIds)))
  }, [favoriteBookIds])

  useEffect(() => {
    const storable = Array.from(reservedBooks.entries()).map(([id, date]) => [id, date.toISOString()])
    localStorage.setItem('reservedBooks', JSON.stringify(storable))
  }, [reservedBooks])

  const [currentView, setCurrentView] = useState<View>('Home')

  const handleChangeView = (view: View) => setCurrentView(view)

  const openModal = (bookDetails: BookDetails) => {
    setSelectedBook(bookDetails)
    setIsModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedBook(null)
  }, [])

  const handleToggleFavorite = useCallback((bookId: number) => {
    setFavoriteBookIds(prevIds => {
      const newIds = new Set(prevIds)
      if (newIds.has(bookId)) {
        newIds.delete(bookId)
      } else {
        newIds.add(bookId)
      }
      return newIds
    })
  }, [])

  const handleReserveBook = useCallback((bookId: number) => {
    setReservedBooks(prevReservations => {
      const newReservations = new Map(prevReservations)
      if (!newReservations.has(bookId)) {
        const returnDate = new Date()
        returnDate.setDate(returnDate.getDate() + 7)
        newReservations.set(bookId, returnDate)
        closeModal()
      } else {
        alert("Este livro já está reservado")
      }
      return newReservations
    })
  }, [closeModal])

  const handleRemoveReservation = useCallback((bookId: number) => {
    setReservedBooks(prevReservations => {
      const newReservations = new Map(prevReservations)
      if (newReservations.has(bookId)) {
        newReservations.delete(bookId)
      }
      return newReservations
    })
  }, [])

  const displayedBooks = useMemo(() => {
    if (currentView === 'Favorites') {
      return BOOKS_DATA.filter(book => favoriteBookIds.has(book.id))
    }
    return BOOKS_DATA
  }, [currentView, favoriteBookIds])

  const modalProps: ModalProps = {
    isModalOpen,
    selectedBook,
    closeModal,
  }

  const gridControlProps: GridControlProps = {
    onCardClick: openModal,
    onToggleFavorite: handleToggleFavorite,
    favoriteIds: favoriteBookIds,
  }

  const isSelectedBookFavorite = selectedBook ? favoriteBookIds.has(selectedBook.id) : false
  const isSelectedBookReserved = selectedBook ? reservedBooks.has(selectedBook.id) : false

  const favoriteButton = selectedBook ? (
    <button
      onClick={() => handleToggleFavorite(selectedBook.id)}
      className={`
                flex justify-center p-2 rounded-lg font-medium transition-all w-full
                ${isSelectedBookFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-bg hover:bg-red-500'}
            `}
      aria-label={isSelectedBookFavorite ? "Remover Favorito" : "Favoritar Livro"}
    >
      <Heart
        className="mr-1 size-5"
        fill={isSelectedBookFavorite ? 'white' : 'currentColor'}
        stroke="white"
      />
      <span className="text-white text-md">
        {isSelectedBookFavorite ? 'Favoritado' : 'Favoritar'}
      </span>
    </button>
  ) : null

  const reservedBookDetails = useMemo(() => {
    const details: (BookDetails & { returnDate: Date })[] = []
    reservedBooks.forEach((returnDate, bookId) => {
      const book = BOOKS_DATA.find(b => b.id === bookId)
      if (book) {
        details.push({ ...book, returnDate })
      }
    })
    return details
  }, [reservedBooks])


  return (
    <>
      <div className='flex font-nunito bg-bg w-screen h-screen'>
        <Menu_lat
          onViewChange={handleChangeView}
          currentView={currentView}
        />

        <div className="flex-grow flow-root p-4 md:p-6 overflow-y-auto">
          {currentView === 'Home' ? (
            <SearchTab
              books={BOOKS_DATA}
              {...gridControlProps}
              {...modalProps}
            />
          ) : currentView === 'Favorites' ? (
            <FavoriteTab
              books={displayedBooks}
              {...gridControlProps}
              {...modalProps}
            />
          ) : (
            <AccountTab
              reservedBooks={reservedBookDetails}
              onRemoveReservation={handleRemoveReservation}
            />
          )}
        </div>

        <Modal_Comp
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedBook ? selectedBook.title : "Detalhes do Livro"}
        >
          {selectedBook && (
            <div className='text-primary flex flex-row space-x-4'>
              <img
                src={selectedBook.imageUrl}
                alt={`Capa do Livro: ${selectedBook.title}`}
                className="w-32 md:w-full rounded-xl object-cover self-start"
              />
              <div className="flex flex-col flex-grow gap-2">
                <p className='text-bg text-lg'>Autor: {selectedBook.author}</p>
                <p className='text-primary text-md'>{selectedBook.description}</p>
              </div>
            </div>
          )}

          <div className=" justify-evenly gap-2 mt-4 flex flex-col md:flex-row md:justify-end items-center border-t border-neutral-600 p-4">
            {selectedBook && !isSelectedBookReserved && (
              <button
                onClick={() => handleReserveBook(selectedBook.id)}
                className="bg-hover-bg text-primary px-4 py-2 rounded-lg hover:bg-bg transition h-full w-full"
              >
                Reservar por 1 semana
              </button>
            )}
            {selectedBook && isSelectedBookReserved && (
              <span className="text-yellow-400 text-sm italic mr-4">
                Reservado até: {reservedBooks.get(selectedBook.id)?.toLocaleDateString()}
              </span>
            )}
            {favoriteButton}            
          </div>
        </Modal_Comp>
      </div>
    </>
  )
}

export default App