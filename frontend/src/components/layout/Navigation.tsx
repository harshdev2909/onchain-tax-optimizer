import React from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  FlaskConical, 
  MessageSquare, 
  Lightbulb, 
  Trophy, 
  Bell, 
  User 
} from 'lucide-react';

type NavigationProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection,
  isMobile = false
}) => {
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { id: 'portfolio', label: 'Portfolio', icon: <PieChart size={16} /> },
    { id: 'simulation', label: 'Simulation', icon: <FlaskConical size={16} /> },
    { id: 'chat', label: 'Chat', icon: <MessageSquare size={16} /> },
    { id: 'education', label: 'Education', icon: <Lightbulb size={16} /> },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy size={16} /> },
    { id: 'alerts', label: 'Alerts', icon: <Bell size={16} /> },
    { id: 'profile', label: 'Profile', icon: <User size={16} /> },
  ];

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              activeSection === item.id
                ? 'bg-gray-800 text-primary'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-colors ${
            activeSection === item.id
              ? 'bg-gray-800 text-primary'
              : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
          }`}
        >
          {item.icon}
          <span className="hidden lg:inline">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;