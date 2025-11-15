'use client';
import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { colorOptions, sizeOptions } from '@/constant/products';

interface ProductFilterProps {
  categories: Record<string, number>;
  selectedCategories: string[];
  selectedSizes: string[];
  selectedColors: string[];
  priceRange: [number, number];
  onToggleCategory: (category: string) => void;
  onToggleSize: (size: string) => void;
  onToggleColor: (color: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onClearAllFilters: () => void;
  onClose?: () => void;
}

export default function ProductFilter({
  categories,
  selectedCategories,
  selectedSizes,
  selectedColors,
  priceRange,
  onToggleCategory,
  onToggleSize,
  onToggleColor,
  onPriceRangeChange,
  onClearAllFilters,
  onClose,
}: ProductFilterProps) {
  return (
    <div className="w-full md:w-80 shrink-0">
      <div className="bg-white rounded-lg p-4 md:p-6 sticky top-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">Filters:</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={onClearAllFilters}
              className="text-blue-600 text-sm hover:underline"
            >
              Clean All
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="md:hidden p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        <Accordion
          type="multiple"
          defaultValue={["category", "size", "colors", "price"]}
          className="w-full"
        >
          <AccordionItem value="category">
            <AccordionTrigger className="font-medium text-gray-900">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {Object.entries(categories).map(([category, count]) => (
                  <label
                    key={category}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => onToggleCategory(category)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-3 text-gray-700 capitalize">
                        {category}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{count}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="size">
            <AccordionTrigger className="font-medium text-gray-900">
              Size
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => onToggleSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSizes.includes(size)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="colors">
            <AccordionTrigger className="font-medium text-gray-900">
              Colors
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onToggleColor(color.value)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedColors.includes(color.value)
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColors.includes(color.value) && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="font-medium text-gray-900">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <input
                  type="range"
                  min="0"
                  max="999"
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceRangeChange([
                      priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full accent-blue-600"
                />
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded px-3 py-2 flex-1">
                    <span className="text-gray-500 mr-1">$</span>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        onPriceRangeChange([
                          parseInt(e.target.value) || 0,
                          priceRange[1],
                        ])
                      }
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="flex items-center border rounded px-3 py-2 flex-1">
                    <span className="text-gray-500 mr-1">$</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        onPriceRangeChange([
                          priceRange[0],
                          parseInt(e.target.value) || 999,
                        ])
                      }
                      className="w-full outline-none"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}