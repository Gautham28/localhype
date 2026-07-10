export const REEL_CAMPAIGN_TEMPLATE = "reel_campaign" as const;

export type FormTemplate = typeof REEL_CAMPAIGN_TEMPLATE;

export type CampaignForm = {
  id: string;
  slug: string;
  title: string;
  business_name: string;
  description: string;
  template: FormTemplate;
  is_open: boolean;
  created_at: string;
  response_count?: number;
};

export type CampaignFormResponse = {
  id: string;
  form_id: string;
  full_name: string;
  instagram_handle: string;
  phone: string;
  city: string;
  availability: string;
  content_experience: string;
  notes: string;
  created_at: string;
};

export type ReelCampaignResponseInput = {
  fullName: string;
  instagramHandle: string;
  phone: string;
  city: string;
  availability: string;
  contentExperience?: string;
  notes?: string;
};

export const REEL_CAMPAIGN_FIELDS = [
  {
    key: "fullName",
    label: "Full name",
    type: "text",
    required: true,
    placeholder: "Your name",
  },
  {
    key: "instagramHandle",
    label: "Instagram handle",
    type: "text",
    required: true,
    placeholder: "@yourhandle",
  },
  {
    key: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    required: true,
    placeholder: "10-digit number",
  },
  {
    key: "city",
    label: "City",
    type: "text",
    required: true,
    placeholder: "Where are you based?",
  },
  {
    key: "availability",
    label: "Availability",
    type: "text",
    required: true,
    placeholder: "e.g. Weekends, evenings, this Friday",
  },
  {
    key: "contentExperience",
    label: "Content experience",
    type: "textarea",
    required: false,
    placeholder: "Any Reels / Stories experience? (optional)",
  },
  {
    key: "notes",
    label: "Anything else?",
    type: "textarea",
    required: false,
    placeholder: "Questions or notes (optional)",
  },
] as const;
