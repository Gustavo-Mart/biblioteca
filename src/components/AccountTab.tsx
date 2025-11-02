import type { BookDetails } from '../types'

interface AccountTabProps {
  reservedBooks: (BookDetails & { returnDate: Date })[]
  onRemoveReservation: (bookId: number) => void
}

export default function AccountTab({ reservedBooks, onRemoveReservation }: AccountTabProps) {
  return (
    <>
      <div className="pl-10 space-y-6">
        <h1 className='text-white text-4xl font-bold'>Minha Conta</h1>
        <div className="w-full h-fit bg-neutral-300/10 rounded-2xl p-6">
          <h2 className='text-white text-3xl mb-4'>Livros Reservados</h2>
          {reservedBooks.length > 0 ? (
            <ul className="xl:grid xl:grid-cols-2 gap-2.5 space-y-3">
              {reservedBooks.map(book => (
                <li key={book.id} className="h-full sm:flex space-x-2 bg-neutral-300/20 rounded-lg">
                  <div className='sm:flex sm:flex-row w-full'>
                    <img src={book.imageUrl} alt={book.title} className=" w-full h-full rounded-tl-lg rounded-tr-lg sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:w-48 object-cover self-start"/>
                    <div className="text-white p-2 sm:flex sm:flex-col sm:justify-center flex-grow w-full">
                      <p className="font-semibold text-md xs:text-xl">{book.title}</p>
                      <p className="text-sm sm:text-md text-neutral-300 mt-0.5">Autor: {book.author}</p>
                      <p className="text-sm sm:text-md text-yellow-400 ">
                        Devolver até: {book.returnDate.toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveReservation(book.id)}
                      className="bg-red-700 text-white px-4 py-2 sm:px-2 sm:py-1 rounded-bl-lg rounded-br-lg sm:rounded-tr-lg sm:rounded-br-lg sm:rounded-bl-none hover:bg-red-800 transition font-semibold self-end w-full sm:max-w-fit h-full"
                    >
                      Devolver Livro
                    </button>
                  </div>
                </li>
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