import React from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatWindowProps {
  isDark: boolean;
  messages: Message[];
  isTyping?: boolean;
}

export default function ChatWindow({ isDark, messages, isTyping }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.isUser
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDark
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <div className={`text-xs mt-2 ${
                message.isUser 
                  ? 'text-blue-100' 
                  : isDark 
                    ? 'text-gray-400' 
                    : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            }`}>
              <div className="flex space-x-1">
                <div className={`w-2 h-2 rounded-full animate-bounce ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} style={{ animationDelay: '0ms' }}></div>
                <div className={`w-2 h-2 rounded-full animate-bounce ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} style={{ animationDelay: '150ms' }}></div>
                <div className={`w-2 h-2 rounded-full animate-bounce ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}