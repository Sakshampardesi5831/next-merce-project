import React from "react";

interface RatingProps {
  rating: number;
  className?: string;
}

export function Rating({ rating, className = "" }: RatingProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {"⭐".repeat(Math.round(rating))}
    </div>
  );
}