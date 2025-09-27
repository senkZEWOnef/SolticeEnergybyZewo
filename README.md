# 🌟 Soltice Energy - Solar Solutions Platform

> **Bienvenido al futuro de la energía renovable en Puerto Rico**

A modern, responsive web application for Soltice Energy, specializing in solar panels, portable batteries, and complete home energy systems. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [📱 Responsive Design](#-responsive-design)
- [🔐 Authentication System](#-authentication-system)
- [💬 Live Chat System](#-live-chat-system)
- [📊 Analytics Dashboard](#-analytics-dashboard)
- [🛠️ Technology Stack](#️-technology-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🌐 Pages Overview](#-pages-overview)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [📞 Contact Information](#-contact-information)

## 🚀 Features

### ⭐ Core Features
- **Modern Landing Page** with hero section and interactive contact form
- **Product Catalog** with detailed solar panel and battery specifications
- **Real-time Live Chat** with admin monitoring and assignment system
- **Multi-role Authentication** (Super Admin, Admin, Assistant)
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Analytics Dashboard** with visitor tracking and performance metrics
- **Collapsible Admin Menu** for better screen space utilization

### 🎯 Business Features
- **Instant Quote System** with form validation and auto-response
- **Free Installation Promotion** prominently displayed
- **7-Year Warranty** highlighting across all pages
- **24/7 Emergency Support** contact integration
- **Social Media Integration** (Instagram, Facebook, WhatsApp)
- **CEO Profile Section** with company leadership information

### 🔧 Technical Features
- **Next.js 15 App Router** for optimal performance
- **Server-Side Rendering (SSR)** and Static Site Generation (SSG)
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for rapid UI development
- **Context API** for state management
- **LocalStorage** for client-side data persistence
- **Responsive Images** with WebP support
- **SEO Optimized** with meta tags and structured data

## 🏗️ Architecture

### 🧩 Component Architecture
```
src/
├── app/                    # Next.js 15 App Router
│   ├── admin/             # Admin dashboard pages
│   ├── assistant/         # Assistant dashboard pages
│   ├── secretary/         # Secretary dashboard pages
│   ├── about/             # About page
│   ├── contacto/          # Contact page
│   ├── productos/         # Products page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── Admin/            # Admin-specific components
│   ├── Assistant/        # Assistant-specific components
│   ├── Secretary/        # Secretary-specific components
│   ├── Chat/             # Live chat components
│   ├── Analytics/        # Analytics tracking components
│   └── UI/               # Common UI components
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

### 🔄 State Management
- **AuthContext**: User authentication and role management
- **ChatContext**: Live chat state and message handling
- **Analytics**: Visitor tracking and performance metrics
- **LocalStorage**: Client-side data persistence for demo purposes

## 📱 Responsive Design

### 🎨 Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### 📐 Mobile Optimizations
- **Collapsible Navigation** with hamburger menu
- **Touch-Friendly Buttons** (minimum 44px touch targets)
- **Optimized Form Layout** for mobile input
- **Swipe-Friendly Gallery** for product showcase
- **Mobile-First CSS** approach with Tailwind utilities

### 💻 Desktop Features
- **Fixed Sidebar Navigation** for admin dashboards
- **Multi-Column Layouts** for better content organization
- **Hover Effects** and smooth transitions
- **Keyboard Navigation** support

## 🔐 Authentication System

### 👥 User Roles
1. **Super Admin**
   - Full system access
   - User management capabilities
   - Analytics dashboard access
   - Product management
   - Chat monitoring and assignment

2. **Admin**
   - Limited administrative access
   - Chat management
   - Basic analytics viewing
   - Product catalog management

3. **Assistant**
   - Chat handling interface
   - Customer interaction tools
   - Basic dashboard access
   - Message history viewing

### 🔑 Authentication Flow
```typescript
// Auth Context Structure
interface User {
  id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'admin' | 'assistant';
  avatar?: string;
}

// Login Process
1. User enters credentials
2. Role validation against stored data
3. Context state update
4. Dashboard redirection based on role
5. Persistent session via localStorage
```

## 💬 Live Chat System

### 🚀 Chat Features
- **Real-time Messaging** with instant delivery
- **Admin Assignment** for chat distribution
- **Message History** with persistent storage
- **Typing Indicators** for better UX
- **File Attachment** support (planned)
- **Chat Status Tracking** (active, completed, pending)

### 🔄 Chat Workflow
```
1. Visitor initiates chat from website
2. Message appears in admin dashboard
3. Admin can assign chat to available assistant
4. Assistant receives notification and handles conversation
5. Chat completion and analytics tracking
```

### 💾 Data Structure
```typescript
interface ChatMessage {
  id: string;
  chatId: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  read: boolean;
}

interface ChatSession {
  id: string;
  visitorId: string;
  assistantId?: string;
  status: 'active' | 'completed' | 'pending';
  messages: ChatMessage[];
  startTime: string;
  endTime?: string;
}
```

## 📊 Analytics Dashboard

### 📈 Metrics Tracked
- **Daily/Total Visitors** with trend analysis
- **Page Views** and popular content tracking
- **Chat Performance** with response time metrics
- **Assistant Performance** with workload distribution
- **Conversion Rates** from visits to contacts
- **Peak Hours** analysis for staffing optimization

### 📋 Dashboard Components
- **Real-time Statistics** with auto-refresh
- **Interactive Charts** showing visitor patterns
- **Performance Cards** with color-coded metrics
- **Top Pages Ranking** with visit counts
- **Assistant Workload** distribution

## 🛠️ Technology Stack

### 🎯 Frontend
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Context API + useState/useEffect

### 🔧 Development Tools
- **Package Manager**: npm
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript compiler
- **Code Formatting**: Prettier (recommended)
- **Version Control**: Git

### 🌐 Deployment
- **Platform**: Vercel (recommended) or Netlify
- **Domain**: Custom domain support
- **SSL**: Automatic HTTPS encryption
- **CDN**: Global edge network for fast loading

## ⚡ Quick Start

### 📋 Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/soltice-energy.git
cd soltice-energy
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📁 Project Structure

```
soltice-energy/
├── 📁 public/                    # Static assets
│   ├── 🖼️ heroNew.jpg           # Hero background image
│   ├── 🖼️ heropic.png           # Hero logo
│   ├── 🖼️ name.png              # Company logo
│   ├── 🖼️ amaury.png            # CEO photo
│   └── 🖼️ Solar6000-2.png       # Product images
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📄 layout.tsx         # Root layout with metadata
│   │   ├── 📄 page.tsx           # Homepage
│   │   ├── 📁 admin/             # Admin dashboard
│   │   ├── 📁 assistant/         # Assistant interface
│   │   ├── 📁 secretary/         # Secretary dashboard
│   │   ├── 📁 about/             # About page
│   │   ├── 📁 contacto/          # Contact page
│   │   └── 📁 productos/         # Products catalog
│   ├── 📁 components/            # React components
│   │   ├── 📁 Admin/             # Admin components
│   │   │   ├── 📄 SuperAdminDashboard.tsx
│   │   │   ├── 📄 LiveChatMonitor.tsx
│   │   │   ├── 📄 SecretaryManagement.tsx
│   │   │   └── 📄 ProductManager.tsx
│   │   ├── 📁 Assistant/         # Assistant components
│   │   │   └── 📄 AssistantDashboard.tsx
│   │   ├── 📁 Secretary/         # Secretary components
│   │   │   └── 📄 SecretaryDashboard.tsx
│   │   ├── 📁 Chat/              # Live chat system
│   │   │   └── 📄 ChatWidget.tsx
│   │   ├── 📁 Analytics/         # Tracking components
│   │   │   └── 📄 VisitorTracker.tsx
│   │   ├── 📄 Header.tsx         # Navigation header
│   │   ├── 📄 Hero.tsx           # Hero section
│   │   ├── 📄 Products.tsx       # Product showcase
│   │   ├── 📄 About.tsx          # About section
│   │   ├── 📄 ContactSection.tsx # Contact form
│   │   ├── 📄 Footer.tsx         # Site footer
│   │   └── 📄 FloatingContactWidget.tsx
│   ├── 📁 contexts/              # React contexts
│   │   ├── 📄 AuthContext.tsx    # Authentication state
│   │   └── 📄 ChatContext.tsx    # Chat state management
│   ├── 📁 hooks/                 # Custom hooks
│   │   ├── 📄 useAnalytics.ts    # Analytics data hook
│   │   └── 📄 useLocalStorage.ts # LocalStorage utilities
│   ├── 📁 types/                 # TypeScript definitions
│   │   ├── 📄 auth.ts            # Auth types
│   │   ├── 📄 chat.ts            # Chat types
│   │   └── 📄 analytics.ts       # Analytics types
│   └── 📄 globals.css            # Global styles
├── 📄 package.json               # Dependencies and scripts
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 next.config.mjs            # Next.js configuration
└── 📄 README.md                  # This file
```

## 🎨 Design System

### 🎨 Color Palette
```css
/* Primary Colors */
--green-400: #4ade80    /* Primary accent */
--green-500: #22c55e    /* Primary dark */

/* Background Colors */
--slate-900: #0f172a    /* Dark background */
--slate-800: #1e293b    /* Medium dark */
--black: #000000        /* Pure black */

/* Text Colors */
--white: #ffffff        /* Primary text */
--gray-400: #9ca3af    /* Secondary text */
--gray-200: #e5e7eb    /* Light text */
```

### 🔤 Typography
- **Headings**: Font weights 700-900 (bold to black)
- **Body**: Font weight 400-600 (normal to semibold)
- **Accent**: Green color for highlights and CTAs

### 🎯 Component Patterns
- **Cards**: White/10 background with backdrop blur
- **Buttons**: Green primary, ghost secondary
- **Forms**: Rounded inputs with focus states
- **Navigation**: Clean with hover animations

## 🌐 Pages Overview

### 🏠 Homepage (`/`)
- **Hero Section**: Eye-catching background with contact form
- **Products Preview**: Featured solar solutions
- **About Section**: Company introduction
- **Contact Section**: Multiple contact methods
- **Offices Section**: Location information
- **Social Proof**: Benefits and guarantees

### 🔋 Products (`/productos`)
- **Product Categories**: Solar panels, batteries, inverters
- **Detailed Specifications**: Technical details and pricing
- **Installation Information**: Free installation highlights
- **Warranty Details**: 7-year guarantee information

### 👥 About (`/about`)
- **Company Story**: Mission and vision
- **CEO Profile**: Amaury Rivera introduction
- **Team Information**: Company leadership
- **Values**: Commitment to renewable energy

### 📞 Contact (`/contacto`)
- **Contact Form**: Detailed inquiry form
- **Office Locations**: Physical address information
- **Phone Numbers**: Direct contact lines
- **Social Media**: Instagram, Facebook, WhatsApp links

### 🔐 Admin Dashboards
- **Super Admin** (`/admin`): Full system management
- **Assistant** (`/assistant`): Chat handling interface
- **Secretary** (`/secretary`): Basic administrative tasks

## 🔧 Configuration

### 🌐 Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME="Soltice Energy"
NEXT_PUBLIC_COMPANY_PHONE="7875207505"
NEXT_PUBLIC_COMPANY_EMAIL="info@solticeenergy.com"

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/soltice.energy/"
NEXT_PUBLIC_FACEBOOK_URL="https://www.facebook.com/p/Soltice-Energy-61561365922592/"
NEXT_PUBLIC_WHATSAPP_URL="https://wa.me/17875207505"

# Analytics (if using external services)
NEXT_PUBLIC_GA_TRACKING_ID="your-ga-id"
```

### ⚙️ Next.js Configuration
```typescript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
```

### 🎨 Tailwind Configuration
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#4ade80',
          500: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## 🚀 Deployment

### 📦 Build Process
```bash
# 1. Install dependencies
npm install

# 2. Run type checking
npm run type-check

# 3. Build for production
npm run build

# 4. Test production build locally
npm run start
```

### 🌐 Deployment Platforms

#### Vercel (Recommended)
1. Connect GitHub repository
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Add environment variables
4. Deploy automatically on push

#### Netlify
1. Connect repository
2. Build settings:
   - **Build Command**: `npm run build && npm run export`
   - **Publish Directory**: `out`
3. Configure redirects for SPA routing

### 🔧 Performance Optimizations
- **Image Optimization**: WebP format with lazy loading
- **Code Splitting**: Automatic with Next.js
- **Bundle Analysis**: Use `@next/bundle-analyzer`
- **Lighthouse Score**: Target 90+ on all metrics

## 📞 Contact Information

### 🏢 Company Details
- **Company**: Soltice Energy
- **CEO**: Amaury Rivera
- **Phone**: (787) 520-7505
- **Email**: info@solticeenergy.com
- **Location**: Puerto Rico

### 🌐 Social Media
- **Instagram**: [@soltice.energy](https://www.instagram.com/soltice.energy/)
- **Facebook**: [Soltice Energy](https://www.facebook.com/p/Soltice-Energy-61561365922592/)
- **WhatsApp**: [+1 (787) 520-7505](https://wa.me/17875207505)

### 💼 Business Hours
- **Available**: 24/7 for emergencies
- **Regular Support**: Monday - Friday, 8:00 AM - 6:00 PM
- **Emergency**: 24/7 emergency support line

---

## 🏆 Key Benefits

### ✅ **For Customers**
- **Free Installation** - No upfront installation costs
- **0% Financing** - Flexible payment options
- **7-Year Warranty** - Extended protection coverage
- **24/7 Support** - Round-the-clock emergency assistance
- **Silent Operation** - 0dB noise level
- **Zero Maintenance** - $0 ongoing maintenance costs

### 🚀 **For Business**
- **Lead Generation** - Integrated contact forms and chat
- **Customer Management** - CRM-style admin dashboard
- **Analytics Tracking** - Visitor and conversion metrics
- **Mobile Optimization** - Perfect mobile experience
- **SEO Optimized** - Search engine friendly structure
- **Scalable Architecture** - Easy to extend and modify

---

**Built with ❤️ for the future of renewable energy in Puerto Rico**

*This README was generated with comprehensive details about the Soltice Energy web application. For technical support or business inquiries, please contact our development team.*
