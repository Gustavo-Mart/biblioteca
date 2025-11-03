import { motion } from "framer-motion"
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
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-secondary rounded-xl shadow-2xl p-4 max-w-2xl w-full max-h-[80vh] overflow-x-hidden m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-hover-bg pb-3 mb-4">
          <div className="flex items-center gap-4">
            <h3
              id="modal-title"
              className="text-2xl text-primary"
            >
              {title}
            </h3>
            {headerAction}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-primary hover:bg-hover-bg transition-colors justify-center"
            aria-label="Fechar Modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-neutral-300">
          {children}
        </div>
      </motion.div>
    </div >
  )
}