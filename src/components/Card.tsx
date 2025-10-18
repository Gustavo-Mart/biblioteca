type CardProps = {
  book: {
    id: number
    title: string
    author: string
    imageUrl: string
    description: string
  }
  onClick: (book: object) => void
}

export default function Card({ book, onClick }: CardProps) {
  return (
    <button
      onClick={() => onClick(book)}
      className="bg-neutral-400 rounded-2xl p-2 h-full w-full cursor-pointer hover:scale-102 hover:bg-[#888888] transition-all outline-0 focus:ring-4 focus:ring-blue-500"
    >
      <img
        src={book.imageUrl}
        alt={`Capa do Livro: ${book.title}`}
        className="w-full h-full rounded-xl"
      />
      <p className="p-2 text-neutral-950 font-semibold">{book.title}</p>
    </button>
  )
}