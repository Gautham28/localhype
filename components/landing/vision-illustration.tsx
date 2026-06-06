import { cn } from "@/lib/utils";

type LayeredBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

function LayeredBox({ className, children }: LayeredBoxProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-brand-black shadow-brutal",
        className
      )}
    >
      {children}
    </div>
  );
}

export function InfluencerIllustration() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-xs md:h-80 md:max-w-sm">
      <LayeredBox className="absolute left-0 top-8 z-10 size-28 bg-brand-lime md:size-32" />
      <LayeredBox className="absolute right-4 top-0 z-20 flex size-36 flex-col justify-between bg-white p-4 md:size-40">
        <div className="flex gap-1">
          <div className="size-8 rounded-full border-2 border-brand-black bg-brand-purple" />
          <div className="flex flex-col gap-1">
            <div className="h-2 w-16 rounded-full bg-brand-black/20" />
            <div className="h-2 w-10 rounded-full bg-brand-black/10" />
          </div>
        </div>
        <div className="font-accent text-xs font-bold uppercase tracking-wide text-brand-purple">
          @localvoice
        </div>
      </LayeredBox>
      <LayeredBox className="absolute bottom-4 left-8 z-30 flex size-44 flex-col justify-end bg-brand-orange p-4 md:size-48">
        <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
          12.4k
        </div>
        <div className="font-accent text-xs font-semibold uppercase tracking-widest text-white/90">
          Story views
        </div>
      </LayeredBox>
      <LayeredBox className="absolute bottom-0 right-0 z-0 size-24 bg-brand-purple md:size-28" />
    </div>
  );
}

export function BusinessIllustration() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-xs md:h-80 md:max-w-sm">
      <LayeredBox className="absolute left-2 top-4 z-0 h-52 w-40 bg-brand-purple md:h-56 md:w-44" />
      <LayeredBox className="absolute left-8 top-12 z-10 flex h-44 w-48 flex-col gap-3 bg-white p-4 md:h-48 md:w-52">
        <div className="font-accent w-fit rounded-full border-2 border-brand-black bg-brand-lime px-2 py-0.5 text-[10px] font-bold uppercase">
          Live campaign
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded-full bg-brand-black/15" />
          <div className="h-3 w-4/5 rounded-full bg-brand-black/10" />
          <div className="h-3 w-3/5 rounded-full bg-brand-black/10" />
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div className="font-heading text-2xl font-extrabold text-brand-orange">
            89%
          </div>
          <div className="font-accent text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Engagement
          </div>
        </div>
      </LayeredBox>
      <LayeredBox className="absolute bottom-6 right-0 z-20 size-28 bg-brand-lime md:size-32" />
      <LayeredBox className="absolute bottom-0 right-16 z-30 flex size-20 items-center justify-center bg-brand-orange md:size-24">
        <span className="font-heading text-lg font-extrabold text-white">↑</span>
      </LayeredBox>
    </div>
  );
}

export function CommunityIllustration() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-xs md:h-80 md:max-w-sm">
      <LayeredBox className="absolute left-0 top-6 z-10 flex size-32 flex-col items-center justify-center gap-2 bg-brand-lime p-4 md:size-36">
        <div className="font-heading text-2xl font-extrabold text-brand-purple md:text-3xl">
          $50
        </div>
        <div className="font-accent text-center text-[10px] font-bold uppercase tracking-wide text-brand-black">
          Per activation
        </div>
      </LayeredBox>
      <LayeredBox className="absolute right-0 top-0 z-20 h-40 w-44 bg-white p-4 md:h-44 md:w-48">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {["☕", "🍕", "🎵"].map((emoji) => (
            <div
              key={emoji}
              className="flex aspect-square items-center justify-center rounded-xl border-2 border-brand-black bg-brand-orange/10 text-xl"
            >
              {emoji}
            </div>
          ))}
        </div>
        <div className="font-accent text-[10px] font-semibold uppercase tracking-widest text-brand-purple">
          Explore & earn
        </div>
      </LayeredBox>
      <LayeredBox className="absolute bottom-2 left-12 z-0 size-36 bg-brand-orange md:size-40" />
      <LayeredBox className="absolute bottom-0 right-8 z-30 flex h-16 w-36 items-center justify-center bg-brand-purple md:w-40">
        <span className="font-accent text-xs font-bold uppercase tracking-widest text-white">
          Your city
        </span>
      </LayeredBox>
    </div>
  );
}
