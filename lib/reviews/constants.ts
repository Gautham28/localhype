export const CLIENT_REVIEW_HIGHLIGHTS = [
  "Great communication",
  "Strong results",
  "Easy to work with",
  "Creative content",
  "Would recommend",
  "Fast turnaround",
  "Good value for money",
  "Reached our target audience",
] as const;

export const CREATOR_REVIEW_HIGHLIGHTS = [
  "Fair pay",
  "Clear instructions",
  "Easy campaigns",
  "Flexible timing",
  "Would join again",
  "Good communication",
  "Fun experience",
  "Quick payouts",
] as const;

export type ClientReviewHighlight = (typeof CLIENT_REVIEW_HIGHLIGHTS)[number];
export type CreatorReviewHighlight = (typeof CREATOR_REVIEW_HIGHLIGHTS)[number];
export type ReviewType = "client" | "creator";

export type Review = {
  id: string;
  review_type: ReviewType;
  business_name: string | null;
  reviewer_name: string;
  rating: number;
  comment: string;
  highlights: string[];
  created_at: string;
};

export const REVIEW_FORM_COPY = {
  client: {
    badge: "Client Review",
    title: "Share your experience",
    description:
      "Tell us how working with LocalHype went. Your feedback helps other local businesses discover what we do.",
    businessLabel: "Business Name",
    nameLabel: "Your Name",
    successMessage:
      "Your review has been submitted and will appear on our website shortly.",
  },
  creator: {
    badge: "Creator Review",
    title: "Share your experience",
    description:
      "Tell us what it's like creating for local brands with LocalHype. Your feedback helps other creators know what to expect.",
    businessLabel: "Business Name",
    nameLabel: "Your Name",
    successMessage:
      "Your review has been submitted and will appear on our website shortly.",
  },
} as const;
