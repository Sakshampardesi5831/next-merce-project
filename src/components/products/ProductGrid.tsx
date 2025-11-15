'use client';
import React from 'react';
import { Grid, List, Heart, Eye, ShoppingCart } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  color: string;
  size: string;
}

interface ProductGridProps {
  products: Product[];
  totalProducts: number;
  viewMode: 'grid' | 'list';
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onPageChange: (page: number) => void;
  onProductQuickView: (product: Product) => void;
}

export default function ProductGrid({
  products,
  totalProducts,
  viewMode,
  currentPage,
  totalPages,
  itemsPerPage,
  onViewModeChange,
  onPageChange,
  onProductQuickView,
}: ProductGridProps) {
  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <select className="border rounded px-4 py-2 text-gray-700">
            <option>Latest Products</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
          <span className="text-gray-600">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalProducts)} of {totalProducts} Products
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded ${
              viewMode === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Products */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
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
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-2 bg-white rounded-md shadow-md hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium">
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => onProductQuickView(product)}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
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
                  <div className="flex items-center">
                    {'⭐'.repeat(Math.round(product.rating.rate))}
                  </div>
                  <span>({product.rating.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 flex gap-4 shadow hover:shadow-lg transition-shadow group"
            >
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden">
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
                      onClick={() => onProductQuickView(product)}
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
                  <div className="flex items-center">
                    {'⭐'.repeat(Math.round(product.rating.rate))}
                  </div>
                  <span>({product.rating.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => onPageChange(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}