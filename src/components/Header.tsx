"use client";
import React, { useState, useMemo } from "react";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  X,
  User,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { productsData } from "@/constant/products";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  // Mock recent searches
  const recentSearches = ["laptop", "jacket", "jewelry", "monitor"];
  
  // Popular categories
  const popularCategories = [
    { name: "Electronics", count: 6 },
    { name: "Men's Clothing", count: 4 },
    { name: "Women's Clothing", count: 6 },
    { name: "Jewelry", count: 4 },
  ];

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return productsData.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6); // Limit to 6 results
  }, [searchQuery]);

  return (
    <header className="w-full border-b bg-white">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo/logo.png"
              alt="NextMerce Logo"
              className="h-8 sm:h-12 w-auto"
            />
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-2xl items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 whitespace-nowrap">
                  <Menu className="h-4 w-4" />
                  All Categories
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Electronics</DropdownMenuItem>
                <DropdownMenuItem>Fashion</DropdownMenuItem>
                <DropdownMenuItem>Home & Garden</DropdownMenuItem>
                <DropdownMenuItem>Sports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="I am shopping for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search Icon */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsSearchDialogOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Account - Hidden on mobile */}
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-gray-500">ACCOUNT</span>
              <button className="text-sm font-medium text-gray-900 hover:text-blue-600">
                Sign In / Register
              </button>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  0
                </span>
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  0
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden lg:block border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                    Pages
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>About Us</DropdownMenuItem>
                    <DropdownMenuItem>FAQ</DropdownMenuItem>
                    <DropdownMenuItem>Terms & Conditions</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                    Blogs
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Latest Posts</DropdownMenuItem>
                    <DropdownMenuItem>Categories</DropdownMenuItem>
                    <DropdownMenuItem>Featured</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Best Selling
              </a>
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                SALE
              </span>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
        <DialogContent className="max-w-2xl h-[80vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-4 border-b">
            <DialogTitle className="text-left">Search Products</DialogTitle>
          </DialogHeader>
          
          <div className="px-6 py-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {!searchQuery.trim() ? (
              <div className="p-6 space-y-6">
                {/* Recent Searches */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Recent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(search)}
                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Categories */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Popular Categories
                  </h3>
                  <div className="space-y-2">
                    {popularCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(category.name.toLowerCase())}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-xs text-gray-500">{category.count} items</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                {filteredProducts.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">
                      Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                    </h3>
                    <div className="space-y-3">
                      {filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                          onClick={() => {
                            setIsSearchDialogOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 object-contain bg-gray-100 rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {product.title}
                            </h4>
                            <p className="text-xs text-gray-500 capitalize">
                              {product.category}
                            </p>
                            <p className="text-sm font-semibold text-blue-600">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      No products found
                    </h3>
                    <p className="text-xs text-gray-500">
                      Try searching for something else
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Full Width Drawer */}
          <div className="fixed inset-0 bg-white">
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gray-100 hover:bg-gray-200"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex flex-col h-full">
              {/* Header with Logo */}
              <div className="flex items-center justify-between p-6 pb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">
                    NextMerce
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6">
                <nav className="space-y-8">
                  <a
                    href="#"
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Popular
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </a>
                  <a
                    href="#"
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setIsPagesOpen(!isPagesOpen)}
                    >
                      <span className="text-lg font-medium text-gray-700 hover:text-blue-600">
                        Pages
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          isPagesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isPagesOpen && (
                      <div className="pl-4 space-y-3 mt-3">
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          About Us
                        </a>
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          FAQ
                        </a>
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Terms & Conditions
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setIsBlogsOpen(!isBlogsOpen)}
                    >
                      <span className="text-lg font-medium text-gray-700 hover:text-blue-600">
                        Blogs
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          isBlogsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isBlogsOpen && (
                      <div className="pl-4 space-y-3 mt-3">
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Latest Posts
                        </a>
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Categories
                        </a>
                        <a
                          href="#"
                          className="block text-base text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Featured
                        </a>
                      </div>
                    )}
                  </div>
                </nav>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-100 p-6 space-y-6">
                <button
                  className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Sign In / Register
                </button>
                <button
                  className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-blue-600 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="h-5 w-5" />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
