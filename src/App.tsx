import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import ThemeToggle from './components/ThemeToggle';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

function App() {
  const [isDark, setIsDark] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand your request. Let me help you with that. This is a simulated AI response that demonstrates the chat functionality.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handlePromptSelect = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className={`flex h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar isDark={isDark} />
      
      <div className="flex-1 flex flex-col">
        {messages.length === 0 ? (
          <WelcomeScreen isDark={isDark} onPromptSelect={handlePromptSelect} />
        ) : (
          <ChatWindow isDark={isDark} messages={messages} isTyping={isTyping} />
        )}
        
        <MessageInput 
          isDark={isDark} 
          onSendMessage={handleSendMessage}
          disabled={isTyping}
        />
      </div>

      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
    </div>
  );
}

export default App;