-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

create extension if not exists "pgcrypto";

create table if not exists campaign_forms (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  business_name text not null,
  description text not null default '',
  template text not null default 'reel_campaign'
    check (template in ('reel_campaign')),
  is_open boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists campaign_form_responses (
  id uuid primary key default gen_random_uuid(),
  form_id uuid not null references campaign_forms(id) on delete cascade,
  full_name text not null,
  instagram_handle text not null,
  phone text not null,
  city text not null,
  availability text not null,
  content_experience text not null default '',
  notes text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists campaign_forms_created_at_idx
  on campaign_forms (created_at desc);

create index if not exists campaign_forms_slug_idx
  on campaign_forms (slug);

create index if not exists campaign_form_responses_form_created_at_idx
  on campaign_form_responses (form_id, created_at desc);
