"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export function StarRating({ value, onChange, disabled = false }: StarRatingProps) {
  return (
    <div className="flex gap-2" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={disabled}
          aria-label={`${star} star${star === 1 ? "" : "s"}`}
          aria-checked={value === star}
          role="radio"
          onClick={() => onChange(star)}
          className={cn(
            "rounded-lg border-2 border-brand-black p-2 transition-colors disabled:cursor-not-allowed disabled:opacity-60",
            value >= star
              ? "bg-brand-orange text-white shadow-brutal-sm"
              : "bg-white text-brand-black hover:bg-muted"
          )}
        >
          <Star
            className="size-6"
            fill={value >= star ? "currentColor" : "none"}
            strokeWidth={2}
          />
        </button>
      ))}
    </div>
  );
}

type StarRatingDisplayProps = {
  rating: number;
  className?: string;
};

export function StarRatingDisplay({ rating, className }: StarRatingDisplayProps) {
  return (
    <div className={cn("flex gap-1", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "size-4",
            rating >= star ? "fill-brand-orange text-brand-orange" : "text-brand-black/20"
          )}
          strokeWidth={2}
        />
      ))}
    </div>
  );
}
