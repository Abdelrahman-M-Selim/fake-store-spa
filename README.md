# FakeStore — Premium Product Explorer

A polished, production-grade Single Page Application built with **React 18 + Vite** that fetches and displays products from the Fake Store API with real-time search, category filtering, and a contact form.

## Live Demo

> Deploy on Vercel : https://fake-store-spa-nine.vercel.app/


## Tech Stack

| Tool               | Purpose                                   |
| ------------------- | ----------------------------------------- |
| React 18            | UI framework with hooks                   |
| Vite                | Build tool & lightning-fast dev server     |
| Tailwind CSS v3     | Utility-first CSS for responsive styling  |
| React Hook Form     | Form validation with error/success states |
| Lucide React        | Consistent, lightweight SVG icon library  |
| Fake Store API      | Product data source                       |

## Features

- Real-time search with debounced input (300ms)
- Category filtering via tab pills (Electronics, Jewelery, Men's, Women's)
- Combined search + category filtering
- Loading spinner + skeleton card placeholders
- Graceful error handling with retry mechanism
- Empty state for no-match queries
- Contact form with React Hook Form validation
- Fully responsive (mobile → tablet → desktop)
- Premium dark theme with glassmorphism effects

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/fake-store-spa.git
cd fake-store-spa

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.jsx          # App branding + product count
│   ├── SearchBar.jsx       # Search input with clear button
│   ├── CategoryFilter.jsx  # Category tab pills
│   ├── ProductCard.jsx     # Individual product card
│   ├── ProductGrid.jsx     # Responsive product grid
│   ├── LoadingSpinner.jsx  # Loading animation
│   ├── SkeletonCard.jsx    # Shimmer loading placeholder
│   ├── ErrorMessage.jsx    # Error display with retry
│   ├── EmptyState.jsx      # No results message
│   ├── ContactForm.jsx     # React Hook Form contact form
│   └── Button.jsx          # Reusable button component
├── hooks/             # Custom React hooks
│   ├── useFetch.js         # API data fetching with AbortController
│   └── useDebounce.js      # Input debouncing
├── App.jsx            # Main application component
├── index.css          # Tailwind directives + custom styles
└── main.jsx           # React entry point
```

## Optimization Techniques

1. **`useMemo`** — Filtered product list recalculates only when dependencies change
2. **`useCallback`** — Handler functions maintain referential equality
3. **`React.memo`** — ProductCard and other components skip re-renders when props are unchanged
4. **`useDebounce`** — Search input is debounced to prevent excessive filtering
5. **`AbortController`** — Network requests are properly cancelled on unmount
6. **Lazy image loading** — Product images use `loading="lazy"` attribute

## Challenges & Solutions

### Challenge: Unnecessary re-renders on search
**Solution:** Implemented a custom `useDebounce` hook that delays the search filter by 300ms, preventing the entire product list from re-filtering on every keystroke. Combined with `useMemo`, the filtered list only recalculates when the debounced value changes.

### Challenge: Race conditions on API calls
**Solution:** Used `AbortController` in the `useFetch` hook to cancel pending requests when the component unmounts or the URL changes, preventing state updates on unmounted components.

### Challenge: Responsive category tabs
**Solution:** Used horizontal scroll with `overflow-x-auto` on mobile, expanding to a flex-wrap layout on larger screens. Active tab uses a gradient background with scale transform for visual feedback.

## License

MIT
