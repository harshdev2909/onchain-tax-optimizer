// Placeholder wallet data
export const walletData = {
  balance: '$5,234.12',
  taxLiability: '$450',
  recentTransactions: [
    { id: 1, description: 'Sold 0.1 ETH', amount: '$350', date: '2025-04-12' },
    { id: 2, description: 'Bought 500 USDC', amount: '$500', date: '2025-04-10' },
    { id: 3, description: 'LP Deposit - Uniswap', amount: '$200', date: '2025-04-05' },
    { id: 4, description: 'NFT Purchase', amount: '$120', date: '2025-04-01' },
    { id: 5, description: 'Staking Rewards', amount: '$45', date: '2025-03-28' },
  ],
  defiActivity: [
    { id: 1, description: 'LP Deposit - Uniswap', amount: '$200', taxable: true, date: '2025-04-05' },
    { id: 2, description: 'Staking Rewards', amount: '$45', taxable: true, date: '2025-03-28' },
    { id: 3, description: 'Interest - Aave', amount: '$12', taxable: true, date: '2025-03-15' },
  ],
};

// Placeholder portfolio data
export const portfolioData = {
  currentAllocation: [
    { asset: 'ETH', percentage: 50, value: '$2,617.06' },
    { asset: 'USDC', percentage: 30, value: '$1,570.24' },
    { asset: 'UNI', percentage: 20, value: '$1,046.82' },
  ],
  recommendedAllocation: [
    { asset: 'ETH', percentage: 40, value: '$2,093.65' },
    { asset: 'USDC', percentage: 40, value: '$2,093.65' },
    { asset: 'UNI', percentage: 20, value: '$1,046.82' },
  ],
  riskScore: 'Moderate',
};

// Placeholder simulation strategies
export const simulationStrategies = [
  'Tax-Loss Harvesting',
  'Hold for Long-Term',
  'Rebalance Portfolio',
  'Exit LP Positions',
  'Dollar-Cost Averaging',
  'Take Profits',
];

// Placeholder simulation results
export const simulationResults = {
  taxSavings: '$120',
  riskReduction: '10%',
  potentialReturn: '+5% annually',
  recommendation: 'Executing this strategy now would reduce your tax liability and slightly lower your risk profile.',
};

// Placeholder chat messages
export const chatMessages = [
  { id: 1, sender: 'user', text: 'What\'s a cost basis?' },
  { id: 2, sender: 'ai', text: 'Cost basis is the original value of an asset for tax purposes. For cryptocurrency, it\'s typically the purchase price plus any fees. When you sell, the difference between your cost basis and selling price determines your capital gain or loss, which affects your tax liability.' },
  { id: 3, sender: 'user', text: 'Should I diversify my portfolio?' },
  { id: 4, sender: 'ai', text: 'Based on your current holdings, diversification could reduce your risk exposure. I recommend increasing your USDC allocation to 40% to provide more stability against market volatility. This would maintain significant upside potential while protecting against downside risk.' },
];

// Placeholder education data
export const educationData = {
  lessons: [
    { id: 1, title: 'Capital Gains 101', description: 'Learn the basics of crypto taxation and capital gains calculation.', completed: true },
    { id: 2, title: 'Staking Taxes', description: 'Understand how staking rewards are taxed and strategies to optimize.', completed: true },
    { id: 3, title: 'DeFi Taxes', description: 'Navigate the complex world of DeFi taxation, including LP positions and yield farming.', completed: true },
    { id: 4, title: 'Portfolio Diversification', description: 'Strategies for balancing risk and reward in your crypto portfolio.', completed: false },
  ],
  quizzes: [
    { 
      id: 1, 
      question: 'What\'s the long-term capital gains rate for most crypto investors?', 
      options: ['0%', '15%', '20%', '37%'],
      correctAnswer: 1,
    },
  ],
  badges: [
    { id: 1, title: 'Tax Pro', description: 'Completed all tax education modules', earned: true },
    { id: 2, title: 'Portfolio Guru', description: 'Optimized portfolio 3 times', earned: false },
    { id: 3, title: 'DeFi Expert', description: 'Completed DeFi tax simulation', earned: true },
  ],
};

// Placeholder leaderboard data
export const leaderboardData = {
  topUsers: [
    { id: 1, username: 'CryptoWhale', points: 850, badge: 'Diamond' },
    { id: 2, username: 'TaxNinja', points: 720, badge: 'Diamond' },
    { id: 3, username: 'BlockchainBaron', points: 650, badge: 'Platinum' },
    { id: 4, username: 'DeFiDiva', points: 610, badge: 'Platinum' },
    { id: 5, username: 'SatoshiStudent', points: 580, badge: 'Gold' },
    { id: 6, username: 'TokenTrader', points: 510, badge: 'Gold' },
    { id: 7, username: 'CoinCollector', points: 490, badge: 'Gold' },
    { id: 8, username: 'HashRateHero', points: 450, badge: 'Silver' },
    { id: 9, username: 'WalletWarrior', points: 420, badge: 'Silver' },
    { id: 10, username: 'CryptoTaxPro', points: 400, badge: 'Silver' },
  ],
  userRank: { rank: 15, points: 300, badge: 'Silver' },
};

// Placeholder alerts data
export const alertsData = [
  { id: 1, message: 'Hold ETH for 2 more months to qualify for long-term capital gains rate', priority: 'high' },
  { id: 2, message: 'Tax filing deadline (April 15) approaching - 30 days remaining', priority: 'high' },
  { id: 3, message: 'Portfolio risk increased to "High" - consider rebalancing', priority: 'medium' },
  { id: 4, message: 'LP position on Uniswap generating potential taxable events', priority: 'medium' },
  { id: 5, message: 'New tax optimization strategy available for your portfolio', priority: 'low' },
];

// Placeholder profile data
export const profileData = {
  taxSavingsSimulated: '$320',
  riskReduction: '15%',
  badgesEarned: '5/15',
  governanceVotes: '3',
  leaderboardRank: '#15',
};

// Placeholder chains data
export const chainsData = [
  { id: 'base', name: 'Base', logo: '🔵' },
  { id: 'ethereum', name: 'Ethereum', logo: '🔷' },
  { id: 'polygon', name: 'Polygon', logo: '🟣' },
  { id: 'optimism', name: 'Optimism', logo: '🔴' },
  { id: 'arbitrum', name: 'Arbitrum', logo: '🔵' },
];