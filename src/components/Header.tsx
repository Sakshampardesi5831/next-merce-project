"use client";
import React, { useState } from "react";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  X,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

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
            <Button variant="ghost" size="icon" className="lg:hidden">
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
                  href="#"
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
