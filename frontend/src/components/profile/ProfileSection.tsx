import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { profileData } from '../../utils/placeholderData';
import { Share2 } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6">
        <h2 className="section-title animate-pulse-slow">Your Progress</h2>
        <p className="text-gray-400 max-w-2xl">
          Track your tax optimization achievements and portfolio improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <Card variant="glass" className="p-6">
            <h3 className="font-orbitron font-semibold text-lg mb-6">Performance Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Tax Savings Progress</h4>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold">{profileData.taxSavingsSimulated}</span>
                    <span className="text-success text-sm">+$120 this month</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-success h-full rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Goal: $450</span>
                    <span>72% Complete</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Risk Management Score</h4>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xl font-bold">Moderate (65/100)</span>
                    <span className="text-success text-sm">↓ {profileData.riskReduction}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-warning h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Low Risk</span>
                    <span>High Risk</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Knowledge Progress</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold">{profileData.badgesEarned.split('/')[0]}</p>
                      <p className="text-xs text-gray-400">Badges Earned</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold">3/4</p>
                      <p className="text-xs text-gray-400">Lessons Completed</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold">8/10</p>
                      <p className="text-xs text-gray-400">Quiz Score</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Community Engagement</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold">{profileData.governanceVotes}</p>
                      <p className="text-xs text-gray-400">Governance Votes</p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold">{profileData.leaderboardRank}</p>
                      <p className="text-xs text-gray-400">Leaderboard Rank</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm text-gray-400 mb-2">Recent Achievements</h4>
              <div className="space-y-2">
                <div className="p-3 bg-gray-800/50 rounded-lg flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    🏆
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Tax Pro Badge Earned</p>
                    <p className="text-xs text-gray-400">Completed all tax education modules</p>
                  </div>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    💰
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">First Tax Optimization</p>
                    <p className="text-xs text-gray-400">Saved $120 through tax-loss harvesting</p>
                  </div>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    📊
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Portfolio Rebalanced</p>
                    <p className="text-xs text-gray-400">Reduced risk by 15% while maintaining returns</p>
                  </div>
                  <span className="text-xs text-gray-500">2 weeks ago</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="order-1 lg:order-2">
          <Card variant="holographic" hover tilt glow className="p-6 mb-6">
            <div className="text-center mb-4">
              <div className="inline-block h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-bold">
                  US
                </div>
              </div>
              <h3 className="font-orbitron font-bold text-xl mt-2">User123</h3>
              <p className="text-gray-400">Joined April 2025</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-primary">{profileData.taxSavingsSimulated}</p>
                <p className="text-xs text-gray-400">Tax Savings</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-secondary">{profileData.badgesEarned}</p>
                <p className="text-xs text-gray-400">Badges</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <p className="text-lg font-bold text-success">{profileData.riskReduction}</p>
                <p className="text-xs text-gray-400">Risk ↓</p>
              </div>
            </div>
            
            <Button
              variant="primary"
              full
              icon={<Share2 size={16} />}
              className="mb-4"
            >
              Share Progress
            </Button>
            
            <div className="bg-gray-900/50 rounded-lg p-3">
              <h4 className="text-sm font-medium mb-2">Connected Wallet</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                    🔵
                  </div>
                  <span className="text-sm">Base</span>
                </div>
                <p className="text-xs text-gray-400">0x71C...a3F9</p>
              </div>
            </div>
          </Card>
          
          <Card variant="glass" className="p-6">
            <h3 className="font-orbitron font-semibold text-lg mb-4">Next Steps</h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/40 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  📝
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Complete Portfolio Diversification</p>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gray-800/40 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  🧪
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Run 3 More Tax Simulations</p>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gray-800/40 rounded-lg flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  🏆
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Reach Top 10 on Leaderboard</p>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;