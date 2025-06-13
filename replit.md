# FlexTime Studio Rental Platform

## Overview

FlexTime is a studio rental platform designed for fitness professionals to book premium fitness studio space by the hour. The application provides flexible access to fully equipped studios without long-term commitments, featuring a booking system, availability checking, and contact management.

## System Architecture

The application follows a full-stack TypeScript architecture with a clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Router**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and production builds
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas shared between client and server
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: tsx for hot reloading during development

## Key Components

### Database Schema (`shared/schema.ts`)
- **users**: User authentication with username/password
- **bookings**: Studio booking records with customer info, dates, and time slots
- **contactMessages**: Contact form submissions

### API Endpoints (`server/routes.ts`)
- `GET /api/availability`: Check available time slots for specific dates/locations
- `POST /api/bookings`: Create new studio bookings with conflict checking
- `POST /api/contact`: Handle contact form submissions

### Storage Layer (`server/storage.ts`)
- Abstract storage interface (`IStorage`) for data operations
- In-memory implementation (`MemStorage`) for development
- Designed for easy extension to database-backed storage

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **HeroSection**: Main landing area with call-to-action buttons
- **BookingCalendar**: Interactive booking interface with availability checking
- **FeaturesSection**: Showcase of studio amenities and benefits
- **TestimonialSection**: Video testimonials from clients
- **Footer**: Contact form and business information

## Data Flow

1. **Booking Process**:
   - User selects location and date
   - System fetches available time slots via `/api/availability`
   - User fills booking form with validation
   - Booking submitted to `/api/bookings` with conflict checking
   - Success/error feedback provided via toast notifications

2. **Contact Process**:
   - User fills contact form in footer modal
   - Form data validated with Zod schema
   - Submitted to `/api/contact` endpoint
   - Stored in database for follow-up

3. **State Management**:
   - React Query handles server state caching and synchronization
   - Forms managed with React Hook Form for validation and submission
   - UI state managed through React hooks and context

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/**: Accessible UI component primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Run with `npm run dev` using tsx for hot reloading
- Vite dev server serves frontend with HMR
- PostgreSQL database configured via `DATABASE_URL` environment variable

### Production Build
- Frontend built with Vite to `dist/public`
- Backend compiled with esbuild to `dist/index.js`
- Single production server serves both static assets and API
- Deployment target: Replit Autoscale with port 80 external mapping

### Database Setup
- Drizzle migrations stored in `./migrations`
- Schema push with `npm run db:push`
- PostgreSQL connection via environment variable

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 13, 2025. Initial setup