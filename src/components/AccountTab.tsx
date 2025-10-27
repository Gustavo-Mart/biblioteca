import type { BookDetails } from '../types'

interface AccountTabProps {
  reservedBooks: (BookDetails & { returnDate: Date })[]
}

export default function AccountTab({ reservedBooks }: AccountTabProps) {
  return (
    <>
      <div className="pl-10 space-y-6">
        <h1 className='text-white text-4xl font-bold'>Minha Conta</h1>
        <div className="w-full h-fit bg-neutral-300/10 rounded-2xl p-6">
          <h2 className='text-white text-3xl mb-4'>Livros Reservados</h2>
          {reservedBooks.length > 0 ? (
            <ul className="space-y-4">
              {reservedBooks.map(book => (
                <li key={book.id} className="flex items-center space-x-4 p-3 bg-neutral-600/50 rounded-xl">
                  <img src={book.imageUrl} alt={book.title} className="w-34 md:w-fit rounded-xl object-cover self-start"/>
                  <div className="text-white">
                    <p className="font-semibold md:text-2xl">{book.title}</p>
                    <p className="text-sm md:text-xl text-neutral-300">Autor: {book.author}</p>
                    <p className="text-sm md:text-lg text-yellow-400 mt-1">
                      Devolver até: {book.returnDate.toLocaleDateString()}
                    </p>
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