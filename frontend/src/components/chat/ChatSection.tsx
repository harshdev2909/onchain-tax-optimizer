import React, { useState, useRef, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ChatBubble from './ChatBubble';
import { chatMessages } from '../../utils/placeholderData';
import { Send, Mic, Trash2 } from 'lucide-react';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: input.trim(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: getSimulatedResponse(input.trim()),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getSimulatedResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('portfolio')) {
      return 'Based on your current portfolio, I recommend increasing your stablecoin allocation to reduce risk. This would help balance your exposure while maintaining growth potential. You could also consider tax-loss harvesting with some of your lower performing assets before the end of the tax year.';
    } else if (lowerQuestion.includes('tax')) {
      return 'For your tax situation, remember that crypto-to-crypto trades are taxable events. If you hold assets for more than 12 months, you\'ll qualify for long-term capital gains rates, which are generally lower than short-term rates. Based on your transaction history, waiting 2 more months on your ETH position could save approximately $120 in taxes.';
    } else if (lowerQuestion.includes('defi') || lowerQuestion.includes('staking')) {
      return 'DeFi activities like providing liquidity or yield farming generate taxable events. Staking rewards are typically taxed as income when received. Based on your current DeFi positions, you may want to track impermanent loss for tax purposes and consider timing your exit from LP positions strategically to optimize for taxes.';
    } else {
      return 'I can help you optimize your crypto taxes and investment strategy on Base. Try asking specific questions about your portfolio, tax strategies, or DeFi/staking taxation. I can provide personalized recommendations based on your on-chain activity.';
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <section id="chat" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6">
        <h2 className="section-title animate-pulse-slow">Ask About Taxes & Portfolio</h2>
        <p className="text-gray-400 max-w-2xl">
          Get personalized explanations and advice about crypto taxes, portfolio optimization, and investment strategies.
        </p>
      </div>

      <Card variant="glass" className="p-4 sm:p-6 h-[600px] max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <h3 className="font-medium text-white">Tax AI Assistant</h3>
              <p className="text-xs text-gray-400">Powered by GPT-4 & Zapper</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={<Trash2 size={16} />}
            onClick={handleClearChat}
            className="text-gray-400 hover:text-white"
          >
            Clear
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <div className="text-6xl opacity-20 mb-4">💬</div>
              <h3 className="text-lg font-medium text-white mb-2">Ask me anything about crypto taxes</h3>
              <p className="text-gray-400 max-w-md">
                I can explain tax concepts, provide personalized advice, analyze your portfolio, and suggest optimization strategies.
              </p>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  sender={message.sender as 'user' | 'ai'}
                />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-800/70 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about taxes, portfolio optimization, or DeFi strategies..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-4 pr-24 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button 
              className="p-2 text-gray-400 hover:text-primary transition-colors"
              aria-label="Voice input"
            >
              <Mic size={18} />
            </button>
            <Button
              variant="primary"
              size="sm"
              icon={<Send size={16} />}
              onClick={handleSendMessage}
              disabled={!input.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      </Card>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          variant="secondary"
          className="text-left px-4 py-3 h-auto"
          full
          onClick={() => setInput("What's the difference between short and long-term capital gains?")}
        >
          <span className="block font-medium mb-1">Capital Gains Basics</span>
          <span className="text-xs text-gray-400">Short vs. long-term rates explained</span>
        </Button>
        <Button
          variant="secondary"
          className="text-left px-4 py-3 h-auto"
          full
          onClick={() => setInput("How are DeFi yields taxed?")}
        >
          <span className="block font-medium mb-1">DeFi Taxation</span>
          <span className="text-xs text-gray-400">Yield farming, LP tokens & more</span>
        </Button>
        <Button
          variant="secondary"
          className="text-left px-4 py-3 h-auto"
          full
          onClick={() => setInput("How can I optimize my portfolio for lower tax liability?")}
        >
          <span className="block font-medium mb-1">Portfolio Optimization</span>
          <span className="text-xs text-gray-400">Strategies to minimize taxes</span>
        </Button>
        <Button
          variant="secondary"
          className="text-left px-4 py-3 h-auto"
          full
          onClick={() => setInput("When should I harvest losses?")}
        >
          <span className="block font-medium mb-1">Tax-Loss Harvesting</span>
          <span className="text-xs text-gray-400">Timing strategies for savings</span>
        </Button>
      </div>
    </section>
  );
};

export default ChatSection;