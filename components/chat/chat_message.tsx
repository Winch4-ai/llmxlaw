import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react'

export interface ChatMessageProps {
    message: string;
    author: 'user' | 'assistant' | 'system';
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, author }) => {
    return (
        <div
            className={`flex pr-4 ${
                author === 'user' ? 'justify-end' : 'justify-start'
            } my-2`}
        >
            <div
                className={`flex items-center px-4 py-2 rounded-lg`}
            >
                {author === 'assistant' && (
                    <div className="flex-shrink-0 mr-2">
                        <Image src="/logotype/4.svg" width={70} height={70} alt="Logo de Winch4.ai" className="text-[#323E48] rounded-full p-2 border-2" aria-label={"Winch4.ai"} />
                    </div>
                )}
                <p className={`text-base flex text-black items-center max-w-[70%] md:max-w-[70%] px-4 py-2 rounded-lg ${
                    author === 'user'
                        ? 'bg-gray-200 text-gray-800 font-normal'
                        : 'bg-transparency text-gray-800 font-medium'
                }`}>{message}</p>
                {author === 'user' && (
                    <div className="items-center justify-center w-[70px] h-[70px] flex border-2 ml-4 rounded-full">
                        <User width={40} height={40} className="text-[#323E48] text-sm" aria-label={"User"} />
                    </div>
                )}
            </div>
        </div>
    );
};