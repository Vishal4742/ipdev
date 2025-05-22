# 🚀 IP Management System

A modern, decentralized platform for managing Intellectual Property (IP) assets with blockchain integration. Built with Next.js, Tailwind CSS, and Web3 technologies.

![Banner](https://via.placeholder.com/1200x400/1a202c/ffffff?text=IP+Management+System)

## ✨ Features

- 🔒 Secure document storage and management
- 🔗 Blockchain-based IP verification
- 📝 Smart contract integration for IP rights
- 👥 Multi-user access control
- 📊 Activity logging and tracking
- 🌓 Dark/Light mode support
- 🔍 Advanced search functionality
- 📱 Responsive design

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express
- **Blockchain**: Ethereum, Smart Contracts (Solidity)
- **Database**: MongoDB
- **Authentication**: JWT
- **State Management**: Redux
- **UI Components**: Custom components with Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- MongoDB instance
- MetaMask or Web3 wallet
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishal4742/ipdev.git
   cd ipdev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📂 Project Structure

```
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   ├── components/          # Reusable components
│   ├── contracts/           # Smart contracts
│   ├── controllers/         # API route handlers
│   ├── models/              # Database models
│   ├── redux/               # Redux store and actions
│   └── styles/              # Global styles
├── public/                  # Static files
└── .env.example             # Environment variables example
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Authors

- **Vishal** - [@Vishal4742](https://github.com/Vishal4742)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web3 Documentation](https://web3js.readthedocs.io/)
- [Ethereum Developer Resources](https://ethereum.org/developers/)

---

Made with ❤️ and JavaScript

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
