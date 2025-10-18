import { X } from "lucide-react"

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export default function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-neutral-800 rounded-xl shadow-2xl p-6 max-h-[90vh] max-w-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-neutral-900 pb-3 mb-4">
          <h3
            id="modal-title"
            className="text-2xl font-semibold text-white"
          >
            {title}
          </h3>
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