import './App.css'
import Menu_lat from './components/Menu_lat'
import Grid_comp from './components/Grid_comp'
import Input from './components/input'
import Modal from './components/modal'
import { useState, useCallback } from 'react'
import { Heart } from 'lucide-react'

export interface BookDetails {
  id: number
  title: string
  author: string
  imageUrl: string
  description: string
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null)
  const [favoriteBookIds, setFavoriteBookIds] = useState<Set<number>>(new Set())

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
        newIds.delete(bookId) // Remove se já estiver lá
      } else {
        newIds.add(bookId)   // Adiciona se não estiver
      }
      return newIds
    })
  }, [])
  const isSelectedBookFavorite = selectedBook ? favoriteBookIds.has(selectedBook.id) : false

  const favoriteButton = selectedBook ? (
    <button
      // Usa a função de toggle com o ID do livro selecionado
      onClick={() => handleToggleFavorite(selectedBook.id)}
      className={`
        flex items-center p-2 rounded-lg font-medium transition-all
        ${isSelectedBookFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-red-500'}
      `}
      aria-label={isSelectedBookFavorite ? "Remover Favorito" : "Favoritar Livro"}
    >
      <Heart
        className="mr-1 size-5"
        fill={isSelectedBookFavorite ? 'white' : 'currentColor'}
        stroke="white"
      />
      <span className="text-white text-sm">
        {isSelectedBookFavorite ? 'Favoritado' : 'Favoritar'}
      </span>
    </button>
  ) : null

  return (
    <>
      <div className='flex font-nunito bg-blue-950 w-screen h-screen'>
        <Menu_lat />
        <div className="flex-grow flow-root justify-items-center space-y-4 p-10 pl-26 overflow-y-auto">
          <h1 className='text-white text-4xl font-bold'>Biblioteca</h1>
          <Input />
          <Grid_comp onCardClick={openModal} onToggleFavorite={handleToggleFavorite} // NOVO: Função para o Card
            favoriteIds={favoriteBookIds}/>
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
                className="lg:max-w-64 sm:max-w-24 w-full rounded-xl"
              />
              <div className="">
                <p className='text-neutral-200 mb-2'>Autor: {selectedBook.author}</p>
                <p className='text-neutral-300'>{selectedBook.description}</p>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-end gap-2">
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

export default App;