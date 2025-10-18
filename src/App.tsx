import './App.css';
import Menu_lat from './components/Menu_lat';
import Grid_comp from './components/Grid_comp';
import Input from './components/input';
import Modal from './components/modal';
import { useState } from 'react';

export interface BookDetails {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookDetails | null>(null)

  const openModal = (bookDetails: BookDetails) => {
    setSelectedBook(bookDetails)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBook(null)
  }

  return (
    <>
      <div className='flex font-nunito bg-blue-950 w-screen h-screen'>
        <Menu_lat />
        <div className="flex-grow flow-root justify-items-center space-y-4 p-10 pl-26 overflow-y-auto">
          <h1 className='text-white text-4xl font-bold'>Biblioteca</h1>
          <Input />
          <Grid_comp onCardClick={openModal} />
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
                className="lg:max-w-64 md:max-w-48 sm:max-w-32 rounded-xl"
              />
              <div className="">
                <p className='text-neutral-200 mb-2'>Autor: {selectedBook.author}</p>
                <p className='text-neutral-300'>{selectedBook.description}</p>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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