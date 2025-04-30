import React from 'react';
import Card from '../ui/Card';
import { leaderboardData } from '../../utils/placeholderData';
import { Trophy, Award, ArrowUp } from 'lucide-react';
import Button from '../ui/Button';

const LeaderboardSection: React.FC = () => {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Diamond':
        return 'bg-blue-500';
      case 'Platinum':
        return 'bg-indigo-500';
      case 'Gold':
        return 'bg-yellow-500';
      case 'Silver':
        return 'bg-gray-400';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section id="leaderboard" className="pt-20 md:pt-24 lg:pt-28 pb-8">
      <div className="mb-6">
        <h2 className="section-title animate-pulse-slow">Top Tax Optimizers</h2>
        <p className="text-gray-400 max-w-2xl">
          Compare your tax optimization skills with other users and earn rewards for reaching the top.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-orbitron font-semibold text-lg flex items-center">
                <Trophy size={20} className="mr-2 text-yellow-500" />
                Leaderboard
              </h3>
              <div className="flex space-x-2">
                <button className="text-xs px-3 py-1 rounded-full bg-primary text-white">Weekly</button>
                <button className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">Monthly</button>
                <button className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">All Time</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Points</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Badge</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.topUsers.map((user, index) => (
                    <tr 
                      key={user.id} 
                      className={`border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors ${index < 3 ? 'animate-pulse-slow' : ''}`}
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold ${
                          index === 0 
                            ? 'bg-yellow-500 text-black' 
                            : index === 1 
                            ? 'bg-gray-300 text-black' 
                            : index === 2 
                            ? 'bg-amber-700 text-white' 
                            : 'bg-gray-800 text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                            <span className="text-xs">{user.username.charAt(0)}</span>
                          </div>
                          <div className="text-sm font-medium">{user.username}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                        <div className="text-sm font-medium">{user.points}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(user.badge)} text-white`}>
                          {user.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <div>
          <Card variant="holographic" hover glow className="p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-orbitron font-semibold text-lg">Your Rank</h3>
              <div className="flex items-center text-success text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>+3 this week</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-800/60 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <span>You</span>
                </div>
                <div>
                  <div className="text-xl font-bold">#{leaderboardData.userRank.rank}</div>
                  <div className="text-xs text-gray-400">Top 5%</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">{leaderboardData.userRank.points}</div>
                <div className="text-xs text-gray-400">Points</div>
              </div>
            </div>
            
            <div className="bg-gray-800/40 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Current Badge</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(leaderboardData.userRank.badge)} text-white`}>
                  {leaderboardData.userRank.badge}
                </span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span>Progress to Gold</span>
                  <span>300/400</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                Need 100 more points to reach Gold badge
              </div>
            </div>
            
            <div className="mt-4">
              <Button
                variant="primary"
                full
                icon={<Award size={16} />}
              >
                Earn More Points
              </Button>
            </div>
          </Card>
          
          <Card variant="glass" className="p-6">
            <h3 className="font-orbitron font-semibold text-lg mb-4">How to Earn Points</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    📝
                  </div>
                  <span className="text-sm">Complete Lessons</span>
                </div>
                <span className="text-primary font-bold">+10</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    🧪
                  </div>
                  <span className="text-sm">Run Simulations</span>
                </div>
                <span className="text-primary font-bold">+15</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    💰
                  </div>
                  <span className="text-sm">Optimize Portfolio</span>
                </div>
                <span className="text-primary font-bold">+25</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    🏆
                  </div>
                  <span className="text-sm">Daily Tax Quiz</span>
                </div>
                <span className="text-primary font-bold">+20</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;