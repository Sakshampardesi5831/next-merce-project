import { useState, useMemo } from "react";
import { productsData } from "@/constant/products";

export function useProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 999]);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const catCount: Record<string, number> = {};
    productsData.forEach((p) => {
      catCount[p.category] = (catCount[p.category] || 0) + 1;
    });
    return catCount;
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const sizeMatch =
        selectedSizes.length === 0 || selectedSizes.includes(product.size);
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && sizeMatch && colorMatch && priceMatch;
    });
  }, [selectedCategories, selectedSizes, selectedColors, priceRange]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 999]);
  };

  return {
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
  };
}