import { motion } from 'framer-motion'
import type { BookDetails } from '../types'

interface AccountTabProps {
  reservedBooks: (BookDetails & { returnDate: Date })[]
  onRemoveReservation: (bookId: number) => void
}

export default function AccountTab({ reservedBooks, onRemoveReservation }: AccountTabProps) {
  return (
    <>
      <div className="mt-2 space-y-4">
        <p className='text-primary pt-2 text-4xl xs:text-6xl font-bold'>Reservas</p>        
        <div className="w-full h-fit bg-secondary/30 rounded-2xl p-4">
          <h2 className='text-primary text-3xl mb-4'>Livros Reservados</h2>
          {reservedBooks.length > 0 ? (
            <ul className="xl:grid xl:grid-cols-2 gap-2.5 space-y-4">
              {reservedBooks.map(book => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeIn' }} 
                  key={book.id}
                  className="h-full sm:flex space-x-2 bg-secondary/20 rounded-lg"
                >
                  <div className='sm:flex sm:flex-row w-full'>
                    <img src={book.imageUrl} alt={book.title} className=" w-full h-full rounded-tl-lg rounded-tr-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:w-48 object-cover self-start"/>
                    <div className="text-white h-full sm:flex sm:flex-col sm:justify-between flex-grow w-full">
                      <div className="my-auto px-4 py-2">
                        <p className="font-semibold text-md xs:text-xl">{book.title}</p>
                        <p className="text-sm sm:text-md text-neutral-300 mt-0.5">Autor: {book.author}</p>
                        <p className="text-sm sm:text-md text-yellow-400 ">
                          Devolver até: {book.returnDate.toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveReservation(book.id)}
                        className="bg-hover-bg text-white px-4 py-2 sm:px-4 sm:py-2 rounded-bl-lg rounded-br-lg sm:rounded-tr-none sm:rounded-br-lg sm:rounded-bl-none hover:bg-bg transition font-semibold self-end w-full sm:max-w-full h-fit"
                      >
                        Devolver Livro
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </ul>
          ) : (
            <p className="text-neutral-400 text-center py-10">
              Você não tem nenhum livro reservado no momento
            </p>
          )}
        </div>
      </div>
    </>
  )
}