import React, { useState } from 'react';
import { Send, Paperclip, Image } from 'lucide-react';

interface MessageInputProps {
  isDark: boolean;
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function MessageInput({ isDark, onSendMessage, disabled }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className={`border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'} p-4`}>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className={`flex items-center space-x-3 p-3 rounded-2xl border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask whatever you want..."
              disabled={disabled}
              className={`flex-1 bg-transparent outline-none ${
                isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
              } disabled:opacity-50`}
            />
            
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
              } text-sm`}>
                <span>🌐</span>
                <span>All Web</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className={`flex items-center space-x-2 text-sm ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                } transition-colors`}
              >
                <Paperclip size={16} />
                <span>Add Attachment</span>
              </button>
              <button
                type="button"
                className={`flex items-center space-x-2 text-sm ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                } transition-colors`}
              >
                <Image size={16} />
                <span>Use Image</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                0/1000
              </span>
              <button
                type="submit"
                disabled={!message.trim() || disabled}
                className={`p-2 rounded-lg transition-colors ${
                  message.trim() && !disabled
                    ? 'bg-black text-white hover:bg-gray-800'
                    : isDark 
                      ? 'bg-gray-700 text-gray-400' 
                      : 'bg-gray-200 text-gray-400'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}