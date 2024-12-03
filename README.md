# Web Board Frontend

A modern web board application built with Next.js and TypeScript, featuring a clean and responsive user interface.

## Installation and Setup

1. **Prerequisites**

   - Node.js (v20 or higher)
   - Yarn package manager

2. **Installation Steps**

   ```bash
   # Clone the repository
   git clone https://github.com/bphaengsrisara/web-board-frontend.git
   cd web-board-frontend

   # Install dependencies
   yarn

   # Set up environment variables
   cp .env.example .env
   # Edit .env file with your configuration

   # Start development server
   yarn dev
   ```

3. **Available Scripts**
   - `yarn dev` - Start development server with Turbopack
   - `yarn build` - Build production application
   - `yarn start` - Start production server
   - `yarn lint` - Run ESLint with automatic fixes

## Application Architecture

### Tech Stack Overview

- **Framework**: Next.js 15.0 (React-based framework)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Form Handling**: React Hook Form
- **Data Fetching**: TanStack Query (React Query)
- **UI Components**: Shadcn UI + Radix UI + Custom components
- **Build Tool**: Turbopack

### Project Structure

```
web-board-frontend/
├── .env                  # Environment variables
├── .env.example          # Example environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier code formatter configuration
├── .prettierignore       # Files to be ignored by Prettier
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
├── components.json       # Shadcn UI configuration
├── src/                  # Source files
│   ├── api/              # API integration and service layers
│   ├── app/              # Next.js app router (pages and layouts)
│   ├── components/       # Reusable UI components
│   ├── config/           # Configuration files (fonts, constants)
│   ├── hooks/            # Custom React hooks
│   ├── interfaces/       # TypeScript interfaces and types
│   ├── lib/              # Utility functions and shared logic
│   ├── providers/        # React context providers
└── public/               # Static files (images, icons)
```

## Libraries and Packages

### Core Dependencies

- **[Next.js](https://nextjs.org/docs) (v15.0.3)**: React framework for production-grade applications
- **[React](https://react.dev/) & [React DOM](https://react.dev/reference/react-dom)**: Core React libraries
- **[TypeScript](https://www.typescriptlang.org/docs/)**: Static type checking

### Data Fetching

- **[@tanstack/react-query](https://tanstack.com/query/latest)**: Powerful data synchronization and caching

### UI Components & Styling

- **[Shadcn UI](https://ui.shadcn.com/docs)**: Headless UI components for building accessible interfaces:
  - [Alert Dialog](https://ui.shadcn.com/docs/components/alert-dialog)
  - [Avatar](https://ui.shadcn.com/docs/components/avatar)
  - [Dialog](https://ui.shadcn.com/docs/components/dialog)
  - [Label](https://ui.shadcn.com/docs/components/label)
  - [Select](https://ui.shadcn.com/docs/components/select)
  - [Separator](https://ui.shadcn.com/docs/components/separator)
  - [Tooltip](https://ui.shadcn.com/docs/components/tooltip)
- **[Tailwind CSS](https://tailwindcss.com/docs)**: Utility-first CSS framework
- **[class-variance-authority](https://cva.style/docs)**: Managing component variants
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Utility for conditional CSS classes
- **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)**: Animation utilities for Tailwind CSS

### Form Handling

- **[React Hook Form](https://react-hook-form.com/)**: Performant form validation

### Development Tools

- **[ESLint](https://eslint.org/docs/latest/)**: Code linting
- **[Prettier](https://prettier.io/docs/en/)**: Code formatting
- **[PostCSS](https://postcss.org/docs/)**: CSS processing
- **[TypeScript](https://www.typescriptlang.org/docs/)**: Type checking and development tools

### Date Handling

- **[date-fns](https://date-fns.org/docs/Getting-Started)**: Modern JavaScript date utility library

### Extra Features but Necessary

1. **User Authentication Features**

   - Sign out functionality through user avatar dropdown in top right corner
   - Secure session management

2. **Enhanced Comment Management**
   - Edit comment functionality
   - Delete comment capability
   - These features were added to improve user experience despite not being in the original design (figma)

## Feedback

We value your input! If you have any questions, suggestions, or feedback about this project, please feel free to reach out to us at bovonrajt.p@gmail.com. Your insights are crucial in helping us improve and enhance the Web Board Frontend.
