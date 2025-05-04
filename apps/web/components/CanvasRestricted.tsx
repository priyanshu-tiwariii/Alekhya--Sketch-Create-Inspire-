'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface CanvasRestrictedProps {
  message: string;
}

export default function CanvasRestricted({ message }: CanvasRestrictedProps) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md text-center space-y-6"
      >
        <div className="text-4xl font-semibold">Access Denied</div>
        <p className="text-lg text-gray-300">
          {message || 'You do not have permission to access this canvas.'}
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-xl transition"
        >
          <ArrowLeft size={18} />
          Return to Dashboard
        </button>
      </motion.div>
    </div>
  )
}