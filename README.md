# PM-AJAY GIA Beneficiary Management System

A modern, interactive frontend application for managing beneficiaries under the GIA (Gram Integrated Action) component of PM-AJAY (Pradhan Mantri Anusuchit Jaati Abhyuday Yojana).

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Light/Dark Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Professional animations throughout the application
- **Interactive Prototype**: Fully clickable and interactive UI components

## Pages

1. **Home** - Landing page with hero section, features, and impact goals
2. **Dashboard** - Real-time statistics, trends, and activity monitoring
3. **Beneficiaries** - Search, filter, and manage beneficiary information
4. **Projects** - Track projects across Income Generation, Skill Development, and Infrastructure Support
5. **Analytics** - Comprehensive insights with performance metrics and comparisons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The application will be available at: **http://localhost:5173/**

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.tsx
│   └── ThemeToggle.tsx
├── context/         # React context providers
│   └── ThemeContext.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Beneficiaries.tsx
│   ├── Projects.tsx
│   └── Analytics.tsx
├── App.tsx          # Main app component
└── index.css        # Global styles
```

## Theme System

The application supports light and dark modes with:
- System preference detection
- Manual toggle control
- LocalStorage persistence
- Smooth transitions

## Key Highlights

### Design Principles
- Clean, modern interface
- Minimal gradient usage
- Professional color scheme
- Consistent spacing and typography
- Accessible UI components

### Interactive Elements
- Hover effects and animations
- Smooth page transitions
- Animated statistics and charts
- Interactive filters and search
- Responsive navigation

## Next Steps (Backend Integration)

This is currently a frontend prototype. For full implementation:
1. Connect to API endpoints
2. Implement authentication
3. Add data validation
4. Set up state management (Redux/Zustand)
5. Integrate with PM-AJAY MIS systems
6. Add real-time data updates

## Contributing

This project was created as part of the Smart India Hackathon 2025.

## License

Government of India - Ministry of Social Justice and Empowerment
