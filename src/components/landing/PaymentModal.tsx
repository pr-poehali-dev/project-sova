import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

interface PaymentModalProps {
  open: boolean
  onClose: () => void
  planName?: string
  planPrice?: string
}

export default function PaymentModal({ open, onClose, planName, planPrice }: PaymentModalProps) {
  const [copied, setCopied] = useState(false)
  const phone = "89137283698"

  const handleCopy = () => {
    navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative bg-neutral-950 border border-[#FF4D00]/40 rounded-2xl p-8 max-w-sm w-full shadow-[0_0_60px_rgba(255,77,0,0.15)]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/30 flex items-center justify-center">
                <Icon name="CreditCard" size={18} className="text-[#FF4D00]" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Оплата</div>
                {planName && <div className="text-neutral-400 text-sm">{planName} — {planPrice}</div>}
              </div>
            </div>

            <div className="bg-white/5 border border-neutral-800 rounded-xl p-4 mb-4">
              <div className="text-neutral-400 text-xs mb-1">Перевод на Сбербанк по номеру телефона</div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-white font-bold text-xl tracking-wider">{phone}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-[#FF4D00]/40 text-[#FF4D00] hover:bg-[#FF4D00]/10 transition-colors"
                >
                  <Icon name={copied ? "Check" : "Copy"} size={13} />
                  {copied ? "Скопировано" : "Копировать"}
                </button>
              </div>
            </div>

            <div className="text-neutral-500 text-xs leading-relaxed">
              После оплаты напишите нам — мы активируем доступ в течение 5 минут.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
