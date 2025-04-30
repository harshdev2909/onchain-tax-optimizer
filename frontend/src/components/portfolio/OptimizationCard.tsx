import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

type AllocationItem = {
  asset: string;
  percentage: number;
  value: string;
};

type OptimizationCardProps = {
  currentAllocation: AllocationItem[];
  recommendedAllocation: AllocationItem[];
  riskScore: string;
  isOptimizing: boolean;
};

const OptimizationCard: React.FC<OptimizationCardProps> = ({
  currentAllocation,
  recommendedAllocation,
  riskScore,
  isOptimizing,
}) => {
  const getChangeIndicator = (current: number, recommended: number) => {
    if (recommended > current) {
      return <span className="text-success">↑ +{recommended - current}%</span>;
    } else if (recommended < current) {
      return <span className="text-error">↓ -{current - recommended}%</span>;
    } else {
      return <span className="text-gray-400">→ No change</span>;
    }
  };

  return (
    <Card variant="holographic" hover tilt className="p-6">
      <h3 className="font-orbitron font-semibold text-lg mb-4 flex items-center">
        <span className="inline-block mr-2 text-xl">✨</span>
        Recommended Optimization
      </h3>

      <div className="space-y-3">
        {recommendedAllocation.map((item, index) => {
          const currentItem = currentAllocation.find(i => i.asset === item.asset);
          const currentPercentage = currentItem ? currentItem.percentage : 0;
          
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-colors">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ 
                    backgroundColor: [
                      'rgba(0, 183, 255, 0.8)', 
                      'rgba(123, 44, 255, 0.8)', 
                      'rgba(255, 62, 154, 0.8)'
                    ][index % 3] 
                  }}
                ></div>
                <span className="text-white">{item.asset}</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">
                  {currentPercentage}% {getChangeIndicator(currentPercentage, item.percentage)} {item.percentage}%
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 bg-gray-900/50 p-3 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Risk Assessment</span>
          <span className="text-sm font-medium px-2 py-1 bg-warning/20 text-warning rounded-full">
            {riskScore}
          </span>
        </div>
        <p className="text-sm text-gray-300">
          Increase USDC to 40% for lower risk while maintaining growth potential.
        </p>
      </div>

      <div className="mt-4">
        <Button
          variant={isOptimizing ? "secondary" : "outline"}
          size="md"
          full
          className="group"
          disabled={isOptimizing}
        >
          <span>View Detailed Analysis</span>
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default OptimizationCard;