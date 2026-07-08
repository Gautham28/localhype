import type { Metadata } from "next";

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
        <p className="font-heading text-lg font-bold tracking-tight">
          LocalHype Admin
        </p>
      </header>
      <main className="px-6 py-10">{children}</main>
    </div>
  );
}
