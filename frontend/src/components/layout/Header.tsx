import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import Button from '../ui/Button';
import Navigation from './Navigation';

type HeaderProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-slow"></div>
            </div>
          </div>
          <div>
            <h1 className="font-orbitron font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight">
              AI Tax Optimizer
            </h1>
            <p className="text-xs text-gray-400 hidden md:block">
              Master Crypto Taxes & Optimize Your Portfolio on Base
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="md"
              icon={<Wallet size={16} />}
              className="animate-float"
              onClick={() => console.log('Connect wallet')}
            >
              Connect Wallet
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-gray-800 p-4">
          <Navigation 
            activeSection={activeSection} 
            setActiveSection={(section) => {
              setActiveSection(section);
              setIsMobileMenuOpen(false);
            }}
            isMobile 
          />
          <div className="mt-4">
            <Button
              variant="primary"
              size="md"
              full
              icon={<Wallet size={16} />}
              onClick={() => {
                console.log('Connect wallet');
                setIsMobileMenuOpen(false);
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;