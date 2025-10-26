// src/types.ts

export interface BookDetails {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

export type View = 'Home' | 'Favorites'

export interface GridControlProps {
    onCardClick: (bookDetails: BookDetails) => void;
    onToggleFavorite: (bookId: number) => void;
    favoriteIds: Set<number>;
}

// 2. Definição da interface completa do Modal Props (para o App.tsx)
export interface ModalProps {
    isModalOpen: boolean;
    selectedBook: BookDetails | null;
    closeModal: () => void;
}