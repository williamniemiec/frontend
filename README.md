# Frontend - Next.js Posts Application

This is a Next.js web application ported from the Expo React Native app. It displays posts organized by categories with favorite functionality. The application uses the **Pages Router** (Next.js standard routing approach).

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:9000
```

3. Make sure the backend server is running on port 9000 (see the backend directory).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- View posts organized by categories
- Filter categories by favorites
- Toggle favorite status for categories
- Responsive design with mobile support
- Persistent category selection using localStorage
- Server-side rendering with `getServerSideProps` for initial data fetching
- Hydration-safe client-side state management

## Project Structure

```
frontend/
├── pages/                  # Next.js Pages Router directory
│   ├── _app.tsx           # Custom App component (global layout)
│   ├── _document.tsx      # Custom Document component (HTML structure)
│   └── index.tsx          # Main page component (home page)
├── styles/                 # Global styles
│   └── globals.css        # Global CSS styles
├── components/             # React components
│   ├── CategoryFilter/     # Category filter sidebar
│   ├── PostList/           # Post list components
│   ├── CategoryButton.tsx  # Category button component
│   ├── FavoriteIcon.tsx    # Favorite icon component
│   ├── PostTag.tsx         # Post tag component
│   └── HomeScreenClient.tsx # Main client component
├── hooks/                  # Custom React hooks
│   ├── useCategories.ts    # Category data fetching hook
│   ├── usePosts.ts         # Posts data fetching hook
│   ├── useSelectedCategory.ts # Category selection with localStorage
│   └── useScreenSize.ts    # Screen size detection hook
├── services/               # API service functions
│   └── posts.ts           # Posts API calls
├── types/                  # TypeScript type definitions
│   ├── Category.ts
│   └── Post.ts
├── lib/                    # Utility libraries
│   └── utils/
│       └── localStorage.ts # localStorage utilities
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Architecture

### Routing
- Uses **Pages Router** (Next.js standard routing)
- `pages/index.tsx` - Home page with server-side data fetching
- `pages/_app.tsx` - Global app wrapper with fonts and metadata
- `pages/_document.tsx` - Custom HTML document structure

### Data Fetching
- **Server-side**: `getServerSideProps` in `pages/index.tsx` fetches initial categories and posts
- **Client-side**: Custom hooks (`usePosts`, `useCategories`) handle subsequent data fetching and updates

### State Management
- Category selection is persisted in localStorage and restored on page refresh
- Client components use React hooks for local state management
- Server-rendered props are passed to client components to avoid hydration mismatches

### Hydration Safety
- The application implements hydration-safe patterns to prevent React hydration errors
- Category selection waits for localStorage check before rendering
- Screen size detection defaults to desktop layout until hydration completes

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the backend API (default: http://localhost:9000)
