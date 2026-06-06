import { cn } from "@/lib/utils";

type PillBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function PillBadge({ children, className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "font-accent inline-flex items-center rounded-full border-2 border-brand-black px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-black md:text-sm",
        className
      )}
    >
      [ {children} ]
    </span>
  );
}
