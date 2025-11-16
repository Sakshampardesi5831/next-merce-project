"use client";
import { useState, useMemo } from "react";
import ProductQuickView from "@/components/products/ProductQuickView";
import ProductFilter from "@/components/products/ProductFilter";

import { Eye, Grid, Heart, List, ShoppingCart, Filter, X } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { ProductPagination } from "@/components/products/ProductPagination";
import { useProductFilters } from "@/hooks/useProductFilters";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [desktopFilterOpen, setDesktopFilterOpen] = useState(true);
  const itemsPerPage = 9;

  const {
    categories,
    selectedCategories,
    selectedSizes,
    selectedColors,
    priceRange,
    currentPage,
    filteredProducts,
    toggleCategory,
    toggleSize,
    toggleColor,
    setPriceRange,
    setCurrentPage,
    clearAllFilters,
  } = useProductFilters();

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Explore All Products
            </h1>
            <div className="text-sm text-gray-600">
              Home / <span className="text-blue-600">Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter */}
          {desktopFilterOpen && (
            <div className="hidden lg:block">
              <ProductFilter
                categories={categories}
                selectedCategories={selectedCategories}
                selectedSizes={selectedSizes}
                selectedColors={selectedColors}
                priceRange={priceRange}
                onToggleCategory={toggleCategory}
                onToggleSize={toggleSize}
                onToggleColor={toggleColor}
                onPriceRangeChange={setPriceRange}
                onClearAllFilters={clearAllFilters}
              />
            </div>
          )}

          {/* Mobile Filter Overlay */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={() => setFilterOpen(false)}
              />
              <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
                <div className="p-4 border-b flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <div className="p-4">
                  <ProductFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    selectedSizes={selectedSizes}
                    selectedColors={selectedColors}
                    priceRange={priceRange}
                    onToggleCategory={toggleCategory}
                    onToggleSize={toggleSize}
                    onToggleColor={toggleColor}
                    onPriceRangeChange={setPriceRange}
                    onClearAllFilters={clearAllFilters}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setFilterOpen(true)}
                    className="lg:hidden p-2 border rounded text-gray-700 hover:bg-gray-50"
                  >
                    <Filter size={20} />
                  </button>
                  <button
                    onClick={() => setDesktopFilterOpen(!desktopFilterOpen)}
                    className="hidden lg:flex items-center gap-2 p-2 border rounded text-gray-700 hover:bg-gray-50"
                  >
                    <Filter size={20} />
                    {desktopFilterOpen ? 'Hide Filters' : 'Show Filters'}
                  </button>
                  <select className="border rounded px-4 py-2 text-gray-700 flex-1 sm:flex-none">
                    <option>Latest Products</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>
                <span className="text-gray-600 text-sm hidden sm:block">
                  Showing {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredProducts.length
                  )}{" "}
                  of {filteredProducts.length} Products
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Products */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {paginatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow group"
                  >
                    <div className="aspect-square bg-gray-100 p-6 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      {/* Hover Actions */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 bg-white rounded-full shadow-md transition-colors">
                            <Heart className="w-4 h-4 hover:text-blue-600" />
                          </button>
                          <button className="px-3 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium">
                            Add to Cart
                          </button>
                          <button
                            onClick={() => {
                              setSelectedProduct(product);
                              setQuickViewOpen(true);
                            }}
                            className="p-2 bg-white rounded-full shadow-md  transition-colors"
                          >
                            <Eye className="w-4 h-4  hover:text-blue-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 line-through text-sm">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {/* <Rating rating={product.rating.rate} />
                        <span>({product.rating.count})</span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {paginatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      {/* Hover Actions for List View */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <div className="flex items-center justify-center gap-1">
                          <button className="p-1.5 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                            <Heart className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedProduct(product);
                              setQuickViewOpen(true);
                            }}
                            className="p-1.5 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            <Eye className="w-3 h-3" />
                          </button>
                          <button className="p-1.5 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                            <ShoppingCart className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 line-through text-sm">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Rating rating={product.rating.rate} />
                        <span>({product.rating.count})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Product Quick View Dialog */}
      <ProductQuickView
        open={quickViewOpen}
        setOpen={setQuickViewOpen}
        product={selectedProduct}
      />
    </div>
  );
}
