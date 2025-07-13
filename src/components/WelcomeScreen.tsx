import React from 'react';
import { User, Mail, FileText, Zap, RefreshCw } from 'lucide-react';

interface WelcomeScreenProps {
  isDark: boolean;
  onPromptSelect: (prompt: string) => void;
}

const prompts = [
  {
    title: "Write a to-do list for a personal project or task",
    icon: User,
  },
  {
    title: "Generate an email ro reply to a job offer",
    icon: Mail,
  },
  {
    title: "Summarise this article or text for me in one paragraph",
    icon: FileText,
  },
  {
    title: "How does AI work in a technical capacity",
    icon: Zap,
  },
];

export default function WelcomeScreen({ isDark, onPromptSelect }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center">
        <h1 className={`text-4xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Hi there
        </h1>
        <h2 className={`text-4xl font-semibold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          What would like to know?
        </h2>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Use one of the most common prompts<br />
          below or use your own to begin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {prompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onPromptSelect(prompt.title)}
              className={`p-4 rounded-xl border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-white' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
              } text-left transition-colors group`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{prompt.title}</p>
                </div>
                <div className="mt-4 flex justify-start">
                  <prompt.icon size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <button className={`flex items-center space-x-2 mx-auto ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
          <RefreshCw size={16} />
          <span>Refresh Prompts</span>
        </button>
      </div>
    </div>
  );
}