import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin — LocalHype",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black">
      <header className="border-b-2 border-brand-black bg-brand-lime px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link
            href="/admin/dashboard"
            className="font-heading text-lg font-bold tracking-tight hover:underline"
          >
            LocalHype Admin
          </Link>
          <Link
            href="/admin/forms/new"
            className="font-accent text-xs font-semibold uppercase tracking-[0.15em] hover:underline"
          >
            New form
          </Link>
        </div>
      </header>
      <main className="px-6 py-10">{children}</main>
    </div>
  );
}
