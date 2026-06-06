import { VisionRow } from "@/components/landing/vision-row";
import { VisionImage } from "@/components/landing/vision-image";

export function Vision() {
  return (
    <section className="relative -mt-10 bg-brand-purple px-4 py-20 md:-mt-14 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 md:gap-28">
        <VisionRow
          pill="The Vision"
          headline="Everyone is an Influencer."
          body="Every neighbor, student, and local with a phone has the power to spark real buzz. LocalHype turns authentic word-of-mouth into measurable reach for the places people actually love."
          illustration={
            <VisionImage
              src="/lh_vision11.png"
              alt="Diverse group of local community members of all ages"
            />
          }
        />

        <VisionRow
          pill="For Local Businesses"
          headline="Marketing That Feels Human."
          body="Stop shouting into the void. Launch campaigns that land through trusted voices — the people your customers already know, follow, and believe."
          illustration={
            <VisionImage
              src="/lh-vision21.png"
              alt="Local business owner checking campaign results on their phone"
            />
          }
          reversed
        />

        <VisionRow
          pill="For Community Members"
          headline="Your Stories Have Value."
          body="Share your favorite spots, get compensated for real engagement, and help the businesses you love thrive — just by being yourself."
          illustration={
            <VisionImage
              src="/lh_vision31.png"
              alt="Hand holding a phone showing LocalHype with coins representing earnings"
            />
          }
        />
      </div>
    </section>
  );
}
