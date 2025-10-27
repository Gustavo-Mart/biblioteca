import './App.css'
import Menu_lat from './components/Menu_lat'
import Modal from './components/Modal'
import SearchTab from './components/SearchTab'
import FavoriteTab from './components/FavoriteTab'
import { useState, useCallback, useMemo } from 'react'
import { Heart } from 'lucide-react'

import { BOOKS_DATA } from './data'
import type { BookDetails, View, GridControlProps, ModalProps } from './types'
import AccountTab from './components/AccountTab'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null)
  const [favoriteBookIds, setFavoriteBookIds] = useState<Set<number>>(new Set())
  const [currentView, setCurrentView] = useState<View>('Home')

  const handleChangeView = (view: View) => setCurrentView(view)

  const openModal = (bookDetails: BookDetails) => {
    setSelectedBook(bookDetails)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBook(null)
  }

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
            <AccountTab/>
          )}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedBook ? selectedBook.title : "Detalhes do Livro"}
        >
          {selectedBook && (
            <div className='text-white flex space-x-6'>
              <img
                src={selectedBook.imageUrl}
                alt={`Capa do Livro: ${selectedBook.title}`}
                className="lg:max-w-64 sm:max-w-24 w-full rounded-xl object-cover"
              />
              <div className="flex flex-col">
                <p className='text-neutral-200 mb-2'>Autor: {selectedBook.author}</p>
                <p className='text-neutral-300'>{selectedBook.description}</p>
              </div>
            </div>
          )}

          <div className=" gap-2 mt-4 flex justify-end">
            {favoriteButton}
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Fechar
            </button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default App