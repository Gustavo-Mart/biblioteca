import { X } from "lucide-react"

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
  headerAction?: React.ReactNode
}

export default function Modal({ children, isOpen, onClose, title, headerAction }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-neutral-500 rounded-xl shadow-2xl p-6 max-h-[90vh] max-w-[95vh] m-5 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-neutral-300 pb-3 mb-4 gap-2">
          <h3
            id="modal-title"
            className="text-2xl sm:text-xl font-semibold text-white"
          >
            {title}
          </h3>
          {headerAction}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-300 hover:text-neutral-900 hover:bg-neutral-700 transition-colors"
            aria-label="Fechar Modal"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-neutral-300">
          {children}
        </div>
      </div>
    </div>
  )
}