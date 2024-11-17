'use client'

import React, { useEffect, useRef } from 'react';
import { } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import InputChat from '@/components/chat/chat_input'
import AccueilChat from '@/components/chat/chat_accueil'
import { message } from '@/types/chat'
import { ChatMessageProps, ChatMessage } from '@/components/chat/chat_message'

export default function Home() {
  const [isChatStarted, setIsChatStarted] = React.useState(false);

  const [messages, setMessages] = React.useState<message[]>([
    { id: '1', senderRole: 'assistant', content: "Hello! How can I assist you today?", timestamp: new Date() }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleChatStart = (messageContent: string) => {
    console.log('Chat started with message:', messageContent);
    setIsChatStarted(true);
    const newMessage: message = {
      id: (messages.length + 1).toString(),
      senderRole: 'user',
      content: messageContent,
      timestamp: new Date()
    };
    setMessages((messages) => [...messages, newMessage]);
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='item-center'>
      {isChatStarted ? (
        <div className='w-full max-w-4xl mx-auto px-4 py-8 flex flex-col justify-end h-screen relative item-center flex-grow'>
          <ScrollArea className='flex-grow flex-col-reverse' ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className='mb-2'>
                <ChatMessage message={msg.content} author={msg.senderRole} />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
          <div className='bottom-10% left-0 right-0'>
            <InputChat onChatStart={handleChatStart} />
          </div>
        </div>
      ) : (
        <div className='item-center max-w-3xl w-full flex-grow mx-auto'>
          <AccueilChat />
          <InputChat onChatStart={handleChatStart} />
        </div>
      )}
    </div>
  );
}