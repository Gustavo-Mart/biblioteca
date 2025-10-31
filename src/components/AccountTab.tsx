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
                <li key={book.id} className="sm:flex xs:items-center space-x-4 bg-neutral-600/50 rounded-xl overflow-hidden">
                  <img src={book.imageUrl} alt={book.title} className="w-full sm:w-48 object-cover self-start"/>
                  <div className="text-white p-2">
                    <p className="font-semibold text-sm xs:text-2xl">{book.title}</p>
                    <p className="text-xs xs:text-xl text-neutral-300 mt-1">Autor: {book.author}</p>
                    <p className="text-sm xs:text-lg text-yellow-400 mt-0.5">
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