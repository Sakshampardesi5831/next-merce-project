"use client";
import React, { useState } from "react";
import { X, Heart, ZoomIn, Star, Check, Minus, Plus } from "lucide-react";

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

interface ProductQuickViewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product | null;
}

export default function ProductQuickView({
  open,
  setOpen,
  product,
}: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const images = [product.image, product.image]; // Using product image, can be extended for multiple images

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative flex flex-col md:flex-row">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Side - Images */}
              <div className="md:w-1/2 p-6 bg-gray-50">
                <div className="flex gap-4">
                  {/* Thumbnail Column */}
                  <div className="flex flex-col gap-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                          selectedImage === idx
                            ? "border-blue-500"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Main Image */}
                  <div className="flex-1 relative group">
                    <div className="aspect-square rounded-xl overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={images[selectedImage]}
                        alt="Product"
                        className="w-full h-full object-contain p-8"
                      />
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Details */}
              <div className="md:w-1/2 p-8 overflow-y-auto max-h-[90vh]">
                {/* Sale Badge */}
                <div className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  SALE 20% OFF
                </div>

                {/* Product Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>

                {/* Rating & Stock */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(product.rating.rate)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">
                      <span className="font-semibold">
                        {product.rating.rate}
                      </span>{" "}
                      Rating
                    </span>
                    <span className="text-gray-400">
                      ( {product.rating.count} reviews )
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">In Stock</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Price & Quantity Section */}
                <div className="flex items-end gap-8 mb-8">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Price</div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-gray-400 line-through">
                        ${(product.price * 1.2).toFixed(2)}
                      </span>
                      <span className="text-4xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Quantity</div>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={decreaseQuantity}
                        className="p-3 hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="w-16 text-center font-medium text-gray-900"
                      />
                      <button
                        onClick={increaseQuantity}
                        className="p-3 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors">
                    Add to Cart
                  </button>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
