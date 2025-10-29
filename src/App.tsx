import './App.css'
import Menu_lat from './components/SideMenu'
import SearchTab from './components/SearchTab'
import FavoriteTab from './components/FavoriteTab'
import AccountTab from './components/AccountTab'
import { useState, useCallback, useMemo } from 'react'
import { Heart } from 'lucide-react'
import { BOOKS_DATA } from './data'
import type { BookDetails, View, GridControlProps, ModalProps } from './types'
import Modal_Comp from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null)
  const [favoriteBookIds, setFavoriteBookIds] = useState<Set<number>>(new Set())
  const [currentView, setCurrentView] = useState<View>('Home')
  const [reservedBooks, setReservedBooks] = useState<Map<number, Date>>(new Map())

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
                flex items-center p-2 rounded-lg font-medium transition-all
                ${isSelectedBookFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-neutral-700 hover:bg-red-500'}
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
      <div className='flex font-nunito bg-blue-950 w-screen h-screen'>
        <Menu_lat
          onViewChange={handleChangeView}
          currentView={currentView}
        />

        <div className="flex-grow flow-root p-10 pl-16 overflow-y-auto">
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
            />
          )}
        </div>

        <Modal_Comp
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedBook ? selectedBook.title : "Detalhes do Livro"}
        >
          {selectedBook && (
            <div className='text-white flex flex-row space-y-4 space-x-6'>
              <img
                src={selectedBook.imageUrl}
                alt={`Capa do Livro: ${selectedBook.title}`}
                className="w-48 md:w-full rounded-xl object-cover self-start"
              />
              <div className="flex flex-col flex-grow">
                <p className='text-neutral-200 mb-2'>Autor: {selectedBook.author}</p>
                <p className='text-neutral-300 flex-grow'>{selectedBook.description}</p>
              </div>
            </div>
          )}

          <div className=" gap-2 mt-6 flex justify-end items-center border-t border-neutral-600 pt-4">
            {selectedBook && !isSelectedBookReserved && (
              <button
                onClick={() => handleReserveBook(selectedBook.id)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
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
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Fechar
            </button>
          </div>
        </Modal_Comp>
      </div>
    </>
  )
}

export default App