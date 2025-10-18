import type { BookDetails } from '@/App'
import Card from './Card'

type Book = {
  id: number
  title: string
  author: string
  imageUrl: string
  description: string
}

interface GridProps {
  onCardClick: (bookDetails: BookDetails) => void;
}

function Grid({ onCardClick }: GridProps) {

  const books: Book[] = [
    {
      id: 1,
      title: 'Design de Interação - Além da Interação Humano-Computador',
      author: 'Autor Desconhecido', // Preencha o Autor/Descrição se tiver
      imageUrl: "/assets/design_interacao.png",
      description: 'Estudo aprofundado sobre os princípios e práticas de design de interação, essencial para projetar sistemas intuitivos.',
    },
    {
      id: 2,
      title: 'Interface Humano-Computador',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/interface_hc.png',
      description: 'Foco na teoria e nas diretrizes para criar interfaces eficazes e fáceis de usar.',
    },
    {
      id: 3,
      title: 'Redes de Computadores e Internet',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/redes.png',
      description: 'Abordagem completa sobre arquitetura de redes, protocolos e funcionamento da Internet.',
    },
    {
      id: 4,
      title: 'Conceitos de linguagem de programação',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/conceitos_lp.png',
      description: 'Exploração dos fundamentos e paradigmas de diversas linguagens de programação.',
    },
    {
      id: 5,
      title: 'Armazenamento e Gerenciamento de Informações',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/armazenamento.png',
      description: 'Introdução aos sistemas de banco de dados, armazenamento em nuvem e estratégias de gestão de dados.',
    },
    {
      id: 6,
      title: 'Matemática aplicada à informática',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/matematica_aplicada.png',
      description: 'Conceitos matemáticos fundamentais para algoritmos e ciência da computação.',
    },
    {
      id: 7,
      title: 'Fundamentos de Sistemas de Informação',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/fundamentos_si.png',
      description: 'Visão geral dos componentes e do papel dos sistemas de informação nas organizações.',
    },
    {
      id: 8,
      title: 'Ciência da Computação - Uma Visão Abrangente',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/ciencia_comp.png',
      description: 'Panorama completo dos principais temas e áreas de estudo em ciência da computação.',
    },
    {
      id: 9,
      title: 'Compreendendo a Saúde Global',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/saude_global.png',
      description: 'Análise dos desafios de saúde pública em escala mundial e estratégias de intervenção.',
    },
    {
      id: 10,
      title: 'Refatorando HTML',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/refatora_html.png',
      description: 'Guia prático sobre como melhorar a estrutura e a semântica do código HTML.',
    },
    {
      id: 11,
      title: 'Conceitos de Computação Com Java',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/conceitos-java.png',
      description: 'Introdução aos conceitos fundamentais de computação utilizando a linguagem Java.',
    },
    {
      id: 12,
      title: 'Fundamentos de Python para Ciência de Dados',
      author: 'Autor Desconhecido',
      imageUrl: '/assets/fundamentos_python.png',
      description: 'Os pilares da linguagem Python focados em aplicações de análise e ciência de dados.',
    },
  ]

  return (
    <div className="w-full h-fit bg-neutral-300/10 rounded-2xl p-6">
      <h2 className='text-3xl'>Resultados: </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {books.map(book => (
          <Card
            key={book.id}
            book={book}
            onClick={() => onCardClick(book)}
          />
        ))}
      </div>
    </div>
  )
}

export default Grid;