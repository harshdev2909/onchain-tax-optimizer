import React from 'react';

type ChatBubbleProps = {
  message: string;
  sender: 'user' | 'ai';
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center mr-2">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
      )}
      <div
        className={`p-3 rounded-lg max-w-[80%] ${
          isUser
            ? 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/20 rounded-tr-none text-white'
            : 'bg-gray-800/70 rounded-tl-none text-gray-200'
        }`}
      >
        <p className="text-sm md:text-base">{message}</p>
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center ml-2">
          <span className="text-white font-bold text-sm">You</span>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;