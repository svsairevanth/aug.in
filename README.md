# 🚀 AugmentCode.in

> **The Ultimate Hub for AI Development Tools, MCP Servers & Community**

A modern, beautifully designed platform showcasing the best MCP servers, AI development tools, and resources for the AugmentCode ecosystem. Built with cutting-edge web technologies and inspired by the latest design trends.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

### 🎯 Core Functionality
- **MCP Server Directory** - Curated collection of Model Context Protocol servers
- **AI Tool Showcase** - Best tools and extensions for AI development
- **Community Hub** - Connect with developers and share resources
- **Job Board** - AI/ML development opportunities
- **Resource Library** - Guides, tutorials, and best practices
- **Trending Board** - Latest news and discussions in AI development

### 🎨 Design & UX
- **Glassmorphism UI** - Modern frosted glass effects with backdrop blur
- **Neumorphism Elements** - Soft, tactile interface components
- **Micro-interactions** - Smooth animations powered by Framer Motion
- **Responsive Design** - Perfect experience across all devices
- **Dark/Light Themes** - Adaptive color schemes
- **Motion Icons** - Animated iconography for enhanced UX

### 🔧 Technical Features
- **Server-Side Rendering** - Optimized performance with Next.js 15
- **Static Generation** - Lightning-fast page loads
- **API Routes** - Built-in backend functionality
- **Database Integration** - Supabase for real-time data
- **Search & Filtering** - Advanced discovery capabilities
- **User Authentication** - Secure login and profiles
- **Content Management** - Easy resource submission and moderation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe database client
- **NextAuth.js** - Authentication solution

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Conventional commits

## 🎨 Design System

### Color Palette
```css
/* Primary Colors - Inspired by AugmentCode */
--primary-50: #f0f9ff;
--primary-500: #3b82f6;
--primary-900: #1e3a8a;

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);

/* Neumorphism */
--neu-light: #ffffff;
--neu-dark: #d1d9e6;
--neu-shadow-light: 20px 20px 60px #bebebe;
--neu-shadow-dark: -20px -20px 60px #ffffff;
```

### Typography
- **Headings**: Inter (700-900 weight)
- **Body**: Inter (400-600 weight)
- **Code**: JetBrains Mono

### Components
- **Cards**: Glassmorphism with subtle animations
- **Buttons**: Neumorphic design with hover states
- **Navigation**: Floating glass navbar
- **Modals**: Backdrop blur with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/svsairevanth12/aug.in.git
cd aug.in
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Configure your environment**
```env
# Database
DATABASE_URL="your-supabase-db-url"
DIRECT_URL="your-supabase-direct-url"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

5. **Run the development server**
```bash
pnpm dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
aug.in/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Protected dashboard
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── db.ts            # Database client
│   ├── auth.ts          # Authentication config
│   └── utils.ts         # Helper functions
├── public/              # Static assets
├── styles/              # Additional styles
└── types/               # TypeScript definitions
```

## 🎯 Key Pages & Features

### 🏠 Homepage
- Hero section with animated background
- Featured MCP servers carousel
- Community stats and highlights
- Call-to-action sections

### 📚 MCP Directory
- Searchable server listings
- Category filtering
- Detailed server pages
- Installation guides
- User ratings and reviews

### 💼 Job Board
- AI/ML job listings
- Company profiles
- Application tracking
- Salary insights

### 👥 Community
- Discussion forums
- User profiles
- Contribution tracking
- Leaderboards

### 📖 Resources
- Documentation hub
- Tutorial library
- Best practices guides
- Video content

## 🎨 Animation & Motion

### Framer Motion Implementations
- **Page Transitions** - Smooth route changes
- **Scroll Animations** - Elements animate on scroll
- **Hover Effects** - Interactive component states
- **Loading States** - Skeleton loaders and spinners
- **Micro-interactions** - Button clicks, form submissions

### Motion Patterns
```typescript
// Example animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};
```

## 🔧 Development

### Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript checking
pnpm db:push      # Push database schema
pnpm db:studio    # Open Prisma Studio
```

### Code Quality
- **TypeScript** for type safety
- **ESLint** with custom rules
- **Prettier** for consistent formatting
- **Husky** for pre-commit hooks
- **Conventional Commits** for clear history

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AugmentCode Team** - For the amazing AI development tools
- **Framer** - For design inspiration and motion library
- **Vercel** - For the incredible Next.js framework
- **Supabase** - For the powerful backend platform

---

**Built with ❤️ for the AI development community**

[Website](https://augmentcode.in) • [Documentation](https://docs.augmentcode.in) • [Community](https://community.augmentcode.in)
