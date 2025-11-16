"use client";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Apple,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Help & Support Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Help & Support
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <p className="text-gray-600 text-sm">
                  685 Market Street, Las Vegas, LA 95820, United States.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-gray-600 text-sm">(+099) 532-786-9843</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-gray-600 text-sm">support@example.com</p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Account
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Login / Register
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Quick Link
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Download App
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Save $3 With App & New User only
            </p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 bg-gray-900 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <p className="text-xs sm:text-sm">Download on the</p>
                  <p className="text-sm sm:text-base font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 sm:gap-3 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs sm:text-sm">Get it On</p>
                  <p className="text-sm sm:text-base font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025. All rights reserved by{" "}
            <span className="font-semibold text-gray-900">Next Merce</span>.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">We Accept:</span>
            <div className="flex items-center flex-wrap justify-center gap-2">
              <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                </div>
              </div>
              <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center text-blue-700 font-bold text-[10px]">
                VISA
              </div>
              <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-[10px]">P</span>
              </div>
              <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center text-[10px] font-semibold text-gray-700">
                AMEX
              </div>
              <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center">
                <div className="flex flex-col text-[10px] font-bold leading-none">
                  <span className="text-yellow-500">W</span>
                  <span className="text-gray-700">U</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
