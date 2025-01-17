import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface NotificationCardProps {
  transaction: {
    amount: number
    pointsEarned: number
    merchant: string
  }
  onClose: () => void
}

export const NotificationCard: React.FC<NotificationCardProps> = ({ transaction, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className={cn(
            "fixed bottom-4 right-4 w-80 p-4 rounded-lg shadow-lg",
            "bg-gradient-to-br from-white/10 to-white/5",
            "backdrop-blur-md",
            "border border-white/20",
            "text-black",
            "notification-card"
          )}
        >
          <button
            onClick={() => {
              setIsVisible(false)
              onClose()
            }}
            className="absolute top-2 right-2 text-white/60 hover:text-white"
          >
            <X size={16} />
          </button>
          <h3 className="text-lg font-semibold mb-2">New Transaction</h3>
          <p className="text-sm mb-1">Amount: <b>${transaction.amount.toFixed(2)}</b></p>
          <p className="text-sm mb-1">Merchant: <b>{transaction.merchant}</b></p>
          <p className="text-sm font-semibold text-green-400 black-background">
            Points Earned: {transaction.pointsEarned}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}