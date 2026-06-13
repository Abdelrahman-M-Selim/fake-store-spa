import { useState, useMemo, useCallback } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import SkeletonGrid from "./components/SkeletonCard";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import ContactForm from "./components/ContactForm";

const API_URL = "https://fakestoreapi.com/products";

const App = () => {
  const { data: products, loading, error } = useFetch(API_URL);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const debouncedSearch = useDebounce(searchQuery, 300);

  const categories = useMemo(() => {
    if (!products) return [];
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, debouncedSearch]);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner />
          <SkeletonGrid count={8} />
        </>
      );
    }

    if (error) {
      return <ErrorMessage message={error} onRetry={handleRetry} />;
    }

    if (filteredProducts.length === 0) {
      return (
        <EmptyState
          searchQuery={debouncedSearch}
          activeCategory={activeCategory}
        />
      );
    }

    return <ProductGrid products={filteredProducts} />;
  };

  return (
    <div className="min-h-screen pb-8">
      <Header productCount={filteredProducts.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="glass-strong rounded-2xl p-4 sm:p-6 space-y-4 gradient-border">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          {categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          )}
        </div>

        <section id="product-listing" className="min-h-[400px]">
          {renderContent()}
        </section>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <ContactForm />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xs text-slate-500">
          Built with React, Tailwind CSS & Fake Store API
        </p>
      </footer>
    </div>
  );
};

export default App;
