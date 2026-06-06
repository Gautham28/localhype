import { Camera, MapPin, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

function GraphicCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-brand-black bg-white shadow-brutal",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CommunityGraphic() {
  return (
    <div className="relative mx-auto h-80 w-full max-w-md md:h-96">
      <GraphicCard className="absolute left-0 top-6 z-10 flex size-32 flex-col items-center justify-center gap-2 p-4 md:size-36">
        <MapPin className="size-8 text-brand-purple" strokeWidth={2.5} />
        <span className="font-accent text-center text-[10px] font-bold uppercase tracking-wide text-brand-black">
          New spot unlocked
        </span>
      </GraphicCard>

      <GraphicCard className="absolute right-2 top-0 z-20 flex h-44 w-48 flex-col justify-between p-4 md:h-48 md:w-52">
        <div className="flex items-center justify-between">
          <Camera className="size-6 text-brand-orange" strokeWidth={2.5} />
          <span className="font-accent rounded-full border-2 border-brand-black bg-brand-lime px-2 py-0.5 text-[10px] font-bold uppercase">
            Story posted
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-16 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-orange/30" />
          <div className="font-accent text-[10px] font-semibold uppercase tracking-widest text-brand-purple">
            Downtown crawl
          </div>
        </div>
      </GraphicCard>

      <GraphicCard className="absolute bottom-16 left-10 z-30 flex items-center gap-3 px-4 py-3 md:left-16">
        <Wallet className="size-6 text-brand-purple" strokeWidth={2.5} />
        <div>
          <div className="font-heading text-xl font-extrabold text-brand-black">
            +$35
          </div>
          <div className="font-accent text-[10px] font-semibold uppercase tracking-wide text-brand-black/60">
            Earned today
          </div>
        </div>
      </GraphicCard>

      <GraphicCard className="absolute bottom-4 right-6 z-0 flex size-28 items-center justify-center bg-brand-purple md:size-32">
        <span className="text-4xl">🏙️</span>
      </GraphicCard>

      <div className="absolute left-1/2 top-1/2 z-0 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand-black/30" />
    </div>
  );
}
