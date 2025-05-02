'use client'

import { useEffect } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

interface AlertModalProps {
  message: string
  type?: 'success' | 'error'
  onClose: () => void
}

export const AlertModal = ({ message, type = 'success', onClose }: AlertModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor = type === 'success' 
    ? 'bg-green-50 border-green-100' 
    : 'bg-red-50 border-red-100'
    
  const textColor = type === 'success' 
    ? 'text-green-600' 
    : 'text-red-600'

  const Icon = type === 'success' ? CheckCircle2 : AlertCircle

  return (
    <div className="fixed inset-x-0 top-6 z-[9999] flex justify-center">
      <div
        className={`flex items-center gap-3 px-6 py-4 border rounded-xl shadow-lg backdrop-blur-sm transition-all
          animate-in slide-in-from-top-12 fade-in-80
          animate-out fade-out-80 slide-out-to-top-12
          ${bgColor} ${textColor}`}
        role="alert"
      >
        <Icon className={`w-6 h-6 ${textColor} flex-shrink-0`} />
        <span className="text-sm font-medium pr-4">{message}</span>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-xl">
          <div
            className={`h-full ${type === 'success' ? 'bg-green-200' : 'bg-red-200'} 
              animate-progress`}
            style={{ animationDuration: '3s' }}
          />
        </div>
      </div>
    </div>
  )
}