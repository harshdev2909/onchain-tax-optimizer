import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SummaryCard from './SummaryCard';
import { walletData, chainsData } from '../../utils/placeholderData';
import { RefreshCw, ArrowRight } from 'lucide-react';

const DashboardSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedChain, setSelectedChain] = useState('base');

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="section-title animate-pulse-slow">Your Tax & Portfolio Overview</h2>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <div className="relative">
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {chainsData.map(chain => (
                <option key={chain.id} value={chain.id}>
                  {chain.logo} {chain.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <Button
            variant="secondary"
            size="md"
            icon={<RefreshCw size={16} className={loading ? 'animate-spin' : ''} />}
            onClick={handleRefresh}
            loading={loading}
          >
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Wallet Balance"
          value={walletData.balance}
          icon="💰"
          trend="+5.2% this week"
          trendUp={true}
        />
        <SummaryCard
          title="Estimated Tax"
          value={walletData.taxLiability}
          icon="🧾"
          trend="-2.8% from last month"
          trendUp={false}
        />
        <SummaryCard
          title="Tax Efficiency"
          value="86%"
          icon="📊"
          trend="+12% optimization"
          trendUp={true}
        />
        <SummaryCard
          title="Risk Level"
          value="Moderate"
          icon="⚖️"
          trend="Suggest rebalancing"
          trendUp={false}
          trendNeutral={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Recent Transactions */}
        <Card variant="glass" hover className="h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-orbitron text-lg font-semibold text-white">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
          <div className="overflow-y-auto scrollbar-thin h-[calc(100%-3rem)] pr-2">
            {walletData.recentTransactions.map((tx) => (
              <div 
                key={tx.id} 
                className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0"
              >
                <div>
                  <p className="text-white text-sm">{tx.description}</p>
                  <p className="text-gray-400 text-xs">{tx.date}</p>
                </div>
                <p className="text-white font-medium">{tx.amount}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* DeFi Activity */}
        <Card variant="glass" hover className="h-[300px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-orbitron text-lg font-semibold text-white">DeFi Activity</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
          <div className="overflow-y-auto scrollbar-thin h-[calc(100%-3rem)] pr-2">
            {walletData.defiActivity.map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0"
              >
                <div>
                  <p className="text-white text-sm">{activity.description}</p>
                  <p className="text-gray-400 text-xs">{activity.date}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-white font-medium">{activity.amount}</p>
                  {activity.taxable && (
                    <span className="text-xs px-2 py-0.5 bg-warning/20 text-warning rounded-full mt-1">
                      Taxable
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <Card variant="holographic" className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-1">
              <div className="inline-block bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text font-orbitron font-bold text-lg md:text-xl mb-2">
                Optimize Your Taxes Now
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-0">
                Our AI analysis shows potential tax-saving opportunities in your portfolio. 
                Run a simulation to see how you could save.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="mt-2 md:mt-0"
              onClick={() => window.scrollTo({ top: document.getElementById('simulation')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Run Tax Simulation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DashboardSection;