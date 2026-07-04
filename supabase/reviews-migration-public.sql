-- Run this if you already created the reviews tables from reviews.sql

alter table reviews
  add column if not exists review_type text not null default 'client';

alter table reviews
  drop constraint if exists reviews_review_type_check;

alter table reviews
  add constraint reviews_review_type_check
  check (review_type in ('client', 'creator'));

alter table reviews
  alter column invite_id drop not null;

alter table reviews
  alter column business_name drop not null;

create index if not exists reviews_type_published_created_at_idx
  on reviews (review_type, published, created_at desc);
