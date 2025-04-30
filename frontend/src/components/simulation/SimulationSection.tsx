import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { simulationStrategies, simulationResults, chainsData } from '../../utils/placeholderData';
import ResultsCard from './ResultsCard';
import { Play } from 'lucide-react';

const SimulationSection: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(simulationStrategies[0]);
  const [asset, setAsset] = useState('ETH');
  const [amount, setAmount] = useState('0.5');
  const [timing, setTiming] = useState('now');
  const [chain, setChain] = useState('base');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <section id="simulation" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6">
        <h2 className="section-title animate-pulse-slow">Test Tax & Portfolio Strategies</h2>
        <p className="text-gray-400 max-w-2xl">
          Simulate different tax strategies and see their impact on your portfolio without making actual transactions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card variant="glass" className="p-6">
          <h3 className="font-orbitron font-semibold text-lg mb-6 flex items-center">
            <span className="inline-block mr-2 text-xl">🧪</span>
            Simulation Setup
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Strategy
              </label>
              <select
                value={selectedStrategy}
                onChange={(e) => setSelectedStrategy(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {simulationStrategies.map((strategy, index) => (
                  <option key={index} value={strategy}>
                    {strategy}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Asset
                </label>
                <select
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                  <option value="UNI">UNI</option>
                  <option value="WBTC">WBTC</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Amount
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="0.0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Timing
                </label>
                <select
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="now">Now</option>
                  <option value="1month">1 Month</option>
                  <option value="3months">3 Months</option>
                  <option value="6months">6 Months</option>
                  <option value="1year">1 Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Chain
                </label>
                <select
                  value={chain}
                  onChange={(e) => setChain(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {chainsData.map(chainItem => (
                    <option key={chainItem.id} value={chainItem.id}>
                      {chainItem.logo} {chainItem.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              full
              icon={<Play size={16} />}
              onClick={handleSimulate}
              loading={isSimulating}
            >
              Simulate Strategy
            </Button>
          </div>
        </Card>

        <ResultsCard
          isVisible={showResults}
          results={simulationResults}
          strategy={selectedStrategy}
          asset={asset}
          amount={amount}
          timing={timing}
          chain={chainsData.find(c => c.id === chain)?.name || chain}
        />
      </div>

      <div className="mt-8">
        <Card variant="holographic" className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-1">
              <div className="inline-block bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-orbitron font-bold text-lg md:text-xl mb-2">
                Need Help With Tax Strategies?
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">
                Learn about different tax strategies and how they can benefit your specific situation.
                Our education center has everything you need.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="mt-2 md:mt-0"
              onClick={() => window.scrollTo({ top: document.getElementById('education')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Visit Education Center
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SimulationSection;