'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Paperclip, Globe, ArrowUp } from 'lucide-react'

interface InputChatProps {
  onChatStart: (message: string) => void
}

export default function InputChat({ onChatStart }: InputChatProps) {
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message.trim()) {
      onChatStart(message) // Notifie le parent que le chat a démarré avec le message
      console.log('Message submitted:', message)
      setMessage('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className="w-full flex-grow mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="relative bg-gray-100 rounded-lg shadow-sm hover:bg-primary hover:text-white">
        <div className="flex px-3 py-2">
          <button type="button" className="text-gray-500 hover:text-white" aria-label="Attach file">
            <Paperclip className="w-5 h-5" />
          </button>
          <button type="button" className="ml-2 text-gray-500 hover:text-white" aria-label="Web search">
            <Globe className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Message Winchy"
            className="flex-grow ml-3 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="p-1 rounded-full bg-gray-300 text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Send message"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}