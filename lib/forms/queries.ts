import { createSupabaseAdmin } from "@/lib/supabase/server";
import {
  REEL_CAMPAIGN_TEMPLATE,
  type CampaignForm,
  type CampaignFormResponse,
  type ReelCampaignResponseInput,
} from "@/lib/forms/constants";
import { slugify, withUniqueSuffix } from "@/lib/forms/slug";

type CreateCampaignFormInput = {
  title: string;
  businessName: string;
  description?: string;
};

export async function listCampaignForms(): Promise<CampaignForm[]> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return [];

  const { data: forms, error } = await supabase
    .from("campaign_forms")
    .select("id, slug, title, business_name, description, template, is_open, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to list campaign forms:", error.message);
    return [];
  }

  if (!forms?.length) return [];

  const { data: counts, error: countError } = await supabase
    .from("campaign_form_responses")
    .select("form_id");

  if (countError) {
    console.error("Failed to count form responses:", countError.message);
  }

  const countByForm = new Map<string, number>();
  for (const row of counts ?? []) {
    const formId = row.form_id as string;
    countByForm.set(formId, (countByForm.get(formId) ?? 0) + 1);
  }

  return forms.map((form) => ({
    ...form,
    response_count: countByForm.get(form.id) ?? 0,
  }));
}

export async function getCampaignFormById(
  id: string
): Promise<CampaignForm | null> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("campaign_forms")
    .select("id, slug, title, business_name, description, template, is_open, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch campaign form:", error.message);
    return null;
  }

  return data;
}

export async function getCampaignFormBySlug(
  slug: string
): Promise<CampaignForm | null> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("campaign_forms")
    .select("id, slug, title, business_name, description, template, is_open, created_at")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch campaign form by slug:", error.message);
    return null;
  }

  return data;
}

export async function getCampaignFormResponses(
  formId: string
): Promise<CampaignFormResponse[]> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("campaign_form_responses")
    .select(
      "id, form_id, full_name, instagram_handle, phone, city, availability, content_experience, notes, created_at"
    )
    .eq("form_id", formId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch form responses:", error.message);
    return [];
  }

  return data ?? [];
}

export async function createCampaignForm(
  input: CreateCampaignFormInput
): Promise<{ ok: true; form: CampaignForm } | { error: string }> {
  const supabase = createSupabaseAdmin();
  if (!supabase) {
    return { error: "Forms are not configured" };
  }

  const title = input.title.trim();
  const businessName = input.businessName.trim();
  const description = input.description?.trim() ?? "";

  if (!title || !businessName) {
    return { error: "Title and business name are required" };
  }

  let slug = slugify(`${title}-${businessName}`);
  if (slug.length > 60) {
    slug = slug.slice(0, 60).replace(/-$/, "");
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const candidate = attempt === 0 ? slug : withUniqueSuffix(slug);

    const { data, error } = await supabase
      .from("campaign_forms")
      .insert({
        slug: candidate,
        title,
        business_name: businessName,
        description,
        template: REEL_CAMPAIGN_TEMPLATE,
        is_open: true,
      })
      .select(
        "id, slug, title, business_name, description, template, is_open, created_at"
      )
      .single();

    if (!error && data) {
      return { ok: true, form: { ...data, response_count: 0 } };
    }

    if (error?.code !== "23505") {
      console.error("Failed to create campaign form:", error?.message);
      return { error: "Failed to create form" };
    }
  }

  return { error: "Failed to create a unique form link. Try again." };
}

export async function setCampaignFormOpen(
  formId: string,
  isOpen: boolean
): Promise<{ ok: true } | { error: string }> {
  const supabase = createSupabaseAdmin();
  if (!supabase) {
    return { error: "Forms are not configured" };
  }

  const { error } = await supabase
    .from("campaign_forms")
    .update({ is_open: isOpen })
    .eq("id", formId);

  if (error) {
    console.error("Failed to update form status:", error.message);
    return { error: "Failed to update form" };
  }

  return { ok: true };
}

export async function submitCampaignFormResponse(
  slug: string,
  input: ReelCampaignResponseInput
): Promise<{ ok: true } | { error: string }> {
  const supabase = createSupabaseAdmin();
  if (!supabase) {
    return { error: "Forms are not configured" };
  }

  const form = await getCampaignFormBySlug(slug);
  if (!form) {
    return { error: "Form not found" };
  }

  if (!form.is_open) {
    return { error: "This form is no longer accepting responses" };
  }

  const fullName = input.fullName.trim();
  const instagramHandle = input.instagramHandle.trim().replace(/^@/, "");
  const phone = input.phone.trim();
  const city = input.city.trim();
  const availability = input.availability.trim();
  const contentExperience = input.contentExperience?.trim() ?? "";
  const notes = input.notes?.trim() ?? "";

  if (!fullName || !instagramHandle || !phone || !city || !availability) {
    return { error: "Please fill in all required fields" };
  }

  const { error } = await supabase.from("campaign_form_responses").insert({
    form_id: form.id,
    full_name: fullName,
    instagram_handle: instagramHandle,
    phone,
    city,
    availability,
    content_experience: contentExperience,
    notes,
  });

  if (error) {
    console.error("Failed to save form response:", error.message);
    return { error: "Failed to submit form" };
  }

  return { ok: true };
}
