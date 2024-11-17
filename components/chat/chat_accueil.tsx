'use client'

import { useState } from 'react'
import { Paperclip, Globe, ArrowUp } from 'lucide-react'

import InputChat from"@/components/chat/chat_input"

export default function AcceuilChat() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <img src='/logotype/4.png' className='w-1/3 mx-auto'></img>
      <h1 className="text-4xl font-bold text-center mb-8">Comment puis-je vous aider ?</h1>
    </div>
  )
}