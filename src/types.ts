export interface BookDetails {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

export type View = 'Home' | 'Favorites' | 'Account'

export interface GridControlProps {
    onCardClick: (bookDetails: BookDetails) => void;
    onToggleFavorite: (bookId: number) => void;
    favoriteIds: Set<number>;
}

export interface ModalProps {
    isModalOpen: boolean;
    selectedBook: BookDetails | null;
    closeModal: () => void;
}