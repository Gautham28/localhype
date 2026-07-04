"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/reviews/star-rating";
import {
  CLIENT_REVIEW_HIGHLIGHTS,
  CREATOR_REVIEW_HIGHLIGHTS,
  REVIEW_FORM_COPY,
  type ReviewType,
} from "@/lib/reviews/constants";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClass =
  "font-sans w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:shadow-brutal-sm";

const labelClass =
  "font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black";

type ReviewFormProps = {
  reviewType: ReviewType;
};

export function ReviewForm({ reviewType }: ReviewFormProps) {
  const copy = REVIEW_FORM_COPY[reviewType];
  const highlights =
    reviewType === "client"
      ? CLIENT_REVIEW_HIGHLIGHTS
      : CREATOR_REVIEW_HIGHLIGHTS;

  const [businessName, setBusinessName] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([]);
  const [ratingError, setRatingError] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function toggleHighlight(highlight: string) {
    setSelectedHighlights((current) =>
      current.includes(highlight)
        ? current.filter((item) => item !== highlight)
        : [...current, highlight]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!rating) {
      setRatingError(true);
      return;
    }

    setRatingError(false);
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/reviews/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reviewType,
          businessName: reviewType === "client" ? businessName : undefined,
          reviewerName,
          rating,
          comment,
          highlights: selectedHighlights,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to submit review");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-brand-black bg-brand-lime p-8 text-center shadow-brutal">
        <p className="font-heading text-2xl font-extrabold text-brand-black">
          Thank you!
        </p>
        <p className="mt-3 text-base leading-relaxed text-brand-black/80">
          {copy.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {reviewType === "client" ? (
        <div className="flex flex-col gap-2">
          <label htmlFor="business-name" className={labelClass}>
            {copy.businessLabel}
          </label>
          <input
            id="business-name"
            name="businessName"
            type="text"
            required
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            className={fieldClass}
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <label htmlFor="reviewer-name" className={labelClass}>
          {copy.nameLabel}
        </label>
        <input
          id="reviewer-name"
          name="reviewerName"
          type="text"
          required
          value={reviewerName}
          onChange={(event) => setReviewerName(event.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className={labelClass}>Rating</span>
        <StarRating
          value={rating}
          onChange={(value) => {
            setRating(value);
            setRatingError(false);
          }}
          disabled={status === "loading"}
        />
        {ratingError ? (
          <p className="text-sm font-medium text-brand-orange">
            Please select a star rating
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className={cn(labelClass, "mb-3 block")}>
          What stood out?{" "}
          <span className="normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => {
            const selected = selectedHighlights.includes(highlight);

            return (
              <button
                key={highlight}
                type="button"
                onClick={() => toggleHighlight(highlight)}
                className={cn(
                  "font-accent rounded-full border-2 border-brand-black px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors md:text-sm",
                  selected
                    ? "bg-brand-purple text-white shadow-brutal-sm"
                    : "bg-white text-brand-black hover:bg-muted"
                )}
              >
                {highlight}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="review-comment" className={labelClass}>
          Your Review{" "}
          <span className="normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <textarea
          id="review-comment"
          name="comment"
          rows={4}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className={cn(fieldClass, "min-h-28 resize-y")}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm font-medium text-brand-orange">{errorMessage}</p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="font-accent h-11 w-full rounded-full border-2 border-brand-black bg-brand-orange text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-orange/90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}
