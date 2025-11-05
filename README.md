# Frontend - Next.js Posts Application

This is a Next.js web application ported from the Expo React Native app. It displays posts organized by categories with favorite functionality.

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

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── CategoryFilter/     # Category filter sidebar
│   ├── PostList/           # Post list components
│   ├── CategoryButton.tsx  # Category button component
│   ├── FavoriteIcon.tsx    # Favorite icon component
│   └── PostTag.tsx         # Post tag component
├── services/               # API service functions
│   └── posts.ts           # Posts API calls
├── types/                  # TypeScript type definitions
│   ├── Category.ts
│   └── Post.ts
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the backend API (default: http://localhost:9000)
