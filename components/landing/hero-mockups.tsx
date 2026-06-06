import { Eye, Flame, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

type StoryCardProps = {
  gradient: string;
  username: string;
  views: string;
  className?: string;
};

function StoryCard({ gradient, username, views, className }: StoryCardProps) {
  return (
    <div
      className={cn(
        "w-[130px] overflow-hidden rounded-2xl border-2 border-brand-black bg-white shadow-brutal md:w-[155px]",
        className
      )}
    >
      <div className="flex gap-1 p-2">
        {[0.9, 0.6, 0.3].map((opacity, i) => (
          <div
            key={i}
            className="h-0.5 flex-1 rounded-full bg-brand-black"
            style={{ opacity }}
          />
        ))}
      </div>
      <div className={cn("mx-2 aspect-9/14 rounded-xl", gradient)}>
        <div className="flex h-full flex-col justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full border-2 border-white bg-white/30" />
            <span className="font-accent text-[10px] font-semibold uppercase tracking-wide text-white">
              {username}
            </span>
          </div>
          <div className="font-accent flex items-center gap-1 self-end rounded-full border-2 border-brand-black bg-brand-lime px-2 py-0.5 text-[10px] font-bold text-brand-black">
            <Eye className="size-3" />
            {views}
          </div>
        </div>
      </div>
    </div>
  );
}

type NotificationBubbleProps = {
  icon: React.ReactNode;
  label: string;
  className?: string;
};

function NotificationBubble({ icon, label, className }: NotificationBubbleProps) {
  return (
    <div
      className={cn(
        "font-accent flex items-center gap-2 rounded-full border-2 border-brand-black bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-brand-black shadow-brutal-sm md:text-sm",
        className
      )}
    >
      {icon}
      {label}
    </div>
  );
}

export function HeroMockups() {
  return (
    <div className="relative mx-auto mt-12 h-[340px] w-full max-w-2xl md:mt-16 md:h-[400px]">
      <div className="animate-float-slow absolute left-[2%] top-8 md:left-[8%]">
        <StoryCard
          gradient="bg-gradient-to-br from-brand-purple to-brand-orange"
          username="cafemode"
          views="1.2k"
          className="-rotate-12"
        />
      </div>
      <div className="animate-float absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <StoryCard
          gradient="bg-gradient-to-br from-brand-lime to-brand-orange"
          username="urbaneats"
          views="3.8k"
          className="rotate-3"
        />
      </div>
      <div className="animate-float-slow absolute right-[2%] top-12 md:right-[8%]">
        <StoryCard
          gradient="bg-gradient-to-br from-brand-orange to-brand-purple"
          username="localgems"
          views="2.4k"
          className="rotate-12"
        />
      </div>

      <div className="animate-float absolute bottom-16 left-[5%] md:left-[12%]">
        <NotificationBubble
          icon={<Flame className="size-4 text-brand-orange" />}
          label="Trending in your city"
          className="-rotate-6"
        />
      </div>
      <div className="animate-float-slow absolute bottom-8 right-[5%] md:right-[12%]">
        <NotificationBubble
          icon={<TrendingUp className="size-4 text-brand-purple" />}
          label="+847 views today"
          className="rotate-6"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-2xl border-2 border-brand-black bg-brand-lime px-5 py-3 shadow-brutal-lg">
        <p className="font-heading text-center text-lg font-extrabold text-brand-purple md:text-xl">
          Real locals. Real hype.
        </p>
      </div>
    </div>
  );
}
