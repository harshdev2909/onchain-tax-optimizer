import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Download, Share2 } from 'lucide-react';

type SimulationResults = {
  taxSavings: string;
  riskReduction: string;
  potentialReturn: string;
  recommendation: string;
};

type ResultsCardProps = {
  isVisible: boolean;
  results: SimulationResults;
  strategy: string;
  asset: string;
  amount: string;
  timing: string;
  chain: string;
};

const ResultsCard: React.FC<ResultsCardProps> = ({
  isVisible,
  results,
  strategy,
  asset,
  amount,
  timing,
  chain,
}) => {
  if (!isVisible) {
    return (
      <Card variant="glass" className="p-6 flex items-center justify-center h-full opacity-70">
        <div className="text-center">
          <div className="mb-4 text-9xl opacity-20">🧪</div>
          <h3 className="font-orbitron text-xl text-gray-500 mb-2">Simulation Results</h3>
          <p className="text-gray-600 max-w-xs mx-auto">
            Configure your simulation parameters and run the simulation to see results here.
          </p>
        </div>
      </Card>
    );
  }

  const formattedTiming = timing === 'now' ? 'immediately' : `in ${timing.replace('months', ' months').replace('year', ' year')}`;

  return (
    <Card variant="holographic" tilt hover glow className="p-6">
      <h3 className="font-orbitron font-semibold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Simulation Results
      </h3>

      <div className="mb-4 p-3 bg-gray-800/40 rounded-lg">
        <h4 className="text-gray-400 text-sm mb-2">Strategy Summary</h4>
        <p className="text-white">
          {strategy} {amount} {asset} on {chain} {formattedTiming}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h4 className="text-gray-400 text-sm">Tax Savings</h4>
          <p className="text-success text-2xl font-bold">{results.taxSavings}</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h4 className="text-gray-400 text-sm">Risk Reduction</h4>
          <p className="text-primary text-2xl font-bold">{results.riskReduction}</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h4 className="text-gray-400 text-sm">Potential Return</h4>
          <p className="text-secondary text-2xl font-bold">{results.potentialReturn}</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h4 className="text-gray-400 text-sm">Confidence Score</h4>
          <div className="flex items-center gap-1">
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-white font-bold">85%</span>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-800/20 rounded-lg border border-gray-700/50">
        <h4 className="text-white text-sm font-medium mb-2">AI Recommendation</h4>
        <p className="text-gray-300 text-sm">{results.recommendation}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          size="md"
          icon={<Download size={16} />}
          className="flex-1"
        >
          Save Simulation
        </Button>
        <Button
          variant="primary"
          size="md"
          icon={<Share2 size={16} />}
          className="flex-1"
        >
          Share Results
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800/50">
        <p className="text-xs text-gray-500">
          Disclaimer: Simulation results are estimates based on current market conditions and tax laws. Actual results may vary. This is not financial advice.
        </p>
      </div>
    </Card>
  );
};

export default ResultsCard;