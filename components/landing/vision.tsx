import { VisionRow } from "@/components/landing/vision-row";
import { VisionImage } from "@/components/landing/vision-image";

export function Vision() {
  return (
    <section className="relative -mt-10 bg-brand-purple px-4 py-20 md:-mt-14 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 md:gap-28">
        <VisionRow
          pill="The Vision"
          headline="Local Creators. Real Reach."
          body="The people who already love your neighborhood are the best marketers for it. LocalHype pairs local businesses with creators who turn everyday trust into campaigns, collabs, and content that drive footfall."
          illustration={
            <VisionImage
              src="/lh_vision11.png"
              alt="Diverse group of local creators of all ages"
            />
          }
        />

        <VisionRow
          pill="For Local Businesses"
          headline="Marketing Built for Local Brands."
          body="From paid story campaigns and food collabs to product photoshoots and reel creation, we handle the strategy, creator matching, and delivery so you can focus on running your business."
          illustration={
            <VisionImage
              src="/lh-vision21.png"
              alt="Local business owner reviewing marketing results on their phone"
            />
          }
          reversed
        />

        <VisionRow
          pill="For Creators"
          headline="Create for Brands You Believe In."
          body="Get matched with local businesses for paid stories, collabs, shoots, and content gigs. Earn for your creativity while helping the places you love grow."
          illustration={
            <VisionImage
              src="/lh_vision31.png"
              alt="Hand holding a phone showing LocalHype with coins representing creator earnings"
            />
          }
        />
      </div>
    </section>
  );
}
