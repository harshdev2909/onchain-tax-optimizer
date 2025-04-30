import React, { useState } from 'react';
import Header from './components/layout/Header';
import DashboardSection from './components/dashboard/DashboardSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import SimulationSection from './components/simulation/SimulationSection';
import ChatSection from './components/chat/ChatSection';
import EducationSection from './components/education/EducationSection';
import LeaderboardSection from './components/leaderboard/LeaderboardSection';
import AlertsSection from './components/alerts/AlertsSection';
import ProfileSection from './components/profile/ProfileSection';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-[-1]"></div>
      <div className="fixed inset-0 z-[-1] opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,183,255,0.1),transparent_20%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(123,44,255,0.1),transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(255,62,154,0.05),transparent_20%)]"></div>
      </div>
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4">
        {activeSection === 'dashboard' && <DashboardSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'simulation' && <SimulationSection />}
        {activeSection === 'chat' && <ChatSection />}
        {activeSection === 'education' && <EducationSection />}
        {activeSection === 'leaderboard' && <LeaderboardSection />}
        {activeSection === 'alerts' && <AlertsSection />}
        {activeSection === 'profile' && <ProfileSection />}
      </main>
      
      <footer className="container mx-auto px-4 py-6 mt-10 border-t border-gray-800 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="text-sm text-gray-500">AI-Powered Onchain Tax Optimizer</span>
            <div className="ml-2 px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full">
              <span className="text-xs text-primary font-medium">Built on Base</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">Support</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">Documentation</a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-4 text-2xl text-gray-600 opacity-30 select-none pointer-events-none text-center font-light">
          © {new Date().getFullYear()} Stepous Labs
        </div>
      </footer>
    </div>
  );
}

export default App;