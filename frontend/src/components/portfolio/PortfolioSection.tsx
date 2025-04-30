import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../utils/placeholderData';
import AllocationChart from './AllocationChart';
import OptimizationCard from './OptimizationCard';
import { ArrowRightLeft } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showOptimized, setShowOptimized] = useState(false);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setShowOptimized(true);
    }, 1500);
  };

  return (
    <section id="portfolio" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="section-title animate-pulse-slow">Optimize Your Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card variant="glass" className="p-6">
          <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center">
            <span className="inline-block mr-2 text-xl">📊</span>
            Current Allocation
          </h3>
          <div className="h-[300px]">
            <AllocationChart 
              data={portfolioData.currentAllocation} 
              showOptimized={showOptimized}
              optimizedData={portfolioData.recommendedAllocation}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {portfolioData.currentAllocation.map((item, index) => (
              <div key={index} className="p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ 
                      backgroundColor: [
                        'rgba(0, 183, 255, 0.8)', 
                        'rgba(123, 44, 255, 0.8)', 
                        'rgba(255, 62, 154, 0.8)'
                      ][index % 3] 
                    }}
                  ></div>
                  <p className="text-sm font-medium text-white">{item.asset}</p>
                </div>
                <p className="text-lg font-bold text-white">{item.percentage}%</p>
                <p className="text-xs text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <OptimizationCard 
            currentAllocation={portfolioData.currentAllocation}
            recommendedAllocation={portfolioData.recommendedAllocation}
            riskScore={portfolioData.riskScore}
            isOptimizing={isOptimizing}
          />

          <Card variant="glass" hover className="p-6">
            <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center">
              <span className="inline-block mr-2 text-xl">⚖️</span>
              Risk Assessment
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Current Risk</span>
                  <span className="text-sm font-medium text-warning">Moderate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="bg-warning h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">After Optimization</span>
                  <span className="text-sm font-medium text-success">Low-Moderate</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="bg-success h-full rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-sm text-gray-300">
                  Optimization would reduce your portfolio volatility by <span className="text-success font-medium">15%</span> while maintaining similar potential returns.
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <Button
                variant="primary"
                full
                icon={<ArrowRightLeft size={16} />}
                onClick={handleOptimize}
                loading={isOptimizing}
              >
                {showOptimized ? "Revert to Original" : "Apply Optimization"}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Card variant="holographic" className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-1">
              <div className="inline-block bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-orbitron font-bold text-lg md:text-xl mb-2">
                Personalized Investment Advice
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">
                Our AI analysis has identified tax-efficient investment strategies for your portfolio.
                Unlock detailed analysis for smarter decisions.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="mt-2 md:mt-0"
              onClick={() => window.scrollTo({ top: document.getElementById('chat')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Get Personalized Advice
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PortfolioSection;