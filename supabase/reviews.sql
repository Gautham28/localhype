-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

create extension if not exists "pgcrypto";

create table if not exists review_invites (
  id uuid primary key default gen_random_uuid(),
  token text unique not null,
  business_name text not null,
  created_at timestamptz not null default now(),
  used_at timestamptz
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  invite_id uuid unique references review_invites(id) on delete cascade,
  review_type text not null default 'client' check (review_type in ('client', 'creator')),
  business_name text,
  reviewer_name text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text not null default '',
  highlights text[] not null default '{}',
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists reviews_published_created_at_idx
  on reviews (published, created_at desc);

create index if not exists reviews_type_published_created_at_idx
  on reviews (review_type, published, created_at desc);

create index if not exists review_invites_token_idx
  on review_invites (token);
