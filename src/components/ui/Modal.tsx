import { X } from "lucide-react"
import React from 'react'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
  headerAction?: React.ReactNode
}

export default function Modal_Comp({ children, isOpen, onClose, title, headerAction }: ModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-neutral-500 rounded-xl shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto m-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-neutral-600 pb-3 mb-4">
          <div className="flex items-center gap-4">
            <h3
              id="modal-title"
              className="text-2xl font-semibold text-white"
            >
              {title}
            </h3>
            {headerAction}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
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