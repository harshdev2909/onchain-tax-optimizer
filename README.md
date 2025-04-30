# AI-Powered Onchain Tax Optimizer

![Built on Base](https://img.shields.io/badge/Built%20on-Base-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A cutting-edge application designed to simplify and optimize cryptocurrency tax compliance for US users, built on the Base blockchain network. This project leverages AI, blockchain technology, and Base's low-cost infrastructure to deliver a comprehensive, user-friendly solution for crypto tax management.

## 🚀 Features

### Core Features
- **Transaction Analysis**
  - Automated categorization of wallet transactions
  - FIFO cost basis calculation
  - IRS-compliant reporting

- **Real-Time Tax Estimates**
  - Capital gains calculations (short-term: 0-37%, long-term: 0-20%)
  - Income tax calculations for staking rewards
  - Real-time token price integration via Chainlink

- **AI-Powered Tax Strategies**
  - Smart tax-loss harvesting suggestions
  - Holding period optimization
  - Charitable donation recommendations

- **Simulation Mode**
  - Risk-free strategy testing
  - Mock wallet integration via AgentKit
  - Transaction outcome logging

### Advanced Features
- **Portfolio Optimization Tool**
- **DeFi Tax Integration**
- **Leaderboard & Tiered Rewards**
- **Real-Time Tax Alerts**
- **Multi-Chain Support**
- **Social Sharing Integration**

## 🛠️ Technology Stack

### Frontend
- React 18
- Next.js
- Tailwind CSS
- MiniKit SDK
- Web Speech API

### Backend
- Node.js
- Express
- OpenAI API
- MongoDB
- Redis

### Blockchain
- Base Network (testnet)
- Solidity
- AgentKit
- Ethers.js
- Hardhat/Foundry

### External APIs
- Zapper (transactions, DeFi, multi-chain)
- Chainlink (price oracles)
- OpenAI (AI logic)

## 🏗️ Architecture

\`\`\`
[User]
   |
   v
[Frontend: React/MiniKit/Tailwind]
   | Dashboard, Portfolio, Simulation, Chat, Education, Leaderboard, Alerts, Profile
   | Web Speech API (Voice)
   |
   v
[Backend: Node.js/Express]
   | Tax Engine, Portfolio Engine, Simulation Engine, Alert Engine, Leaderboard Engine
   | OpenAI Function-Calling, MongoDB, Redis
   | API Gateway (Zapper, Chainlink)
   |
   v
[Blockchain: Base Network]
   | Simulation Contract, Governance Contract, Reward Contract
   | AgentKit (Mock Wallet)
   |
   v
[External Services]
   | Zapper API (Wallet, DeFi, Multi-Chain)
   | Chainlink Oracles (Prices)
   | OpenAI API (Tax, Portfolio, Explanations, Alerts)
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB
- Redis
- Coinbase Wallet
- API Keys (Zapper, OpenAI, Chainlink)

### Installation

1. Clone the repository

```shell
git clone https://github.com/harshdev2909/onchain-tax-optimizer.git
cd onchain-tax-optimizer
```

2. Install dependencies

```shell
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables

Create `.env.local` in the frontend directory:
```plaintext
NEXT_PUBLIC_BASE_NETWORK_URL=your_base_network_url
NEXT_PUBLIC_MINIKIT_API_KEY=your_minikit_api_key
```

Create `.env` in the backend directory:
```plaintext
MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
OPENAI_API_KEY=your_openai_api_key
ZAPPER_API_KEY=your_zapper_api_key
CHAINLINK_NODE_URL=your_chainlink_node_url
```

4. Start the development servers

```shell
# Start frontend
cd frontend
npm run dev

# Start backend
cd ../backend
npm run dev
```

## 📱 Usage

1. Connect your Coinbase Wallet
2. Import transactions from supported chains
3. View tax estimates and portfolio analysis
4. Use simulation mode to test strategies
5. Complete educational modules to earn rewards
6. Track progress on the leaderboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit changes (\`git commit -m 'Add AmazingFeature'\`)
4. Push to branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Base Network team for the buildathon opportunity
- Coinbase for AgentKit and MiniKit
- Zapper for DeFi data integration
- OpenAI for AI capabilities
- Chainlink for price oracle services

## 📧 Contact

Harsh Sharma - [@harshdev2909](https://github.com/harshdev2909)

Project Link: [https://github.com/harshdev2909/onchain-tax-optimizer](https://github.com/harshdev2909/onchain-tax-optimizer)
