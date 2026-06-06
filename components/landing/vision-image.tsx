import Image from "next/image";
import { cn } from "@/lib/utils";

type VisionImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function VisionImage({ src, alt, className }: VisionImageProps) {
  return (
    <div
      className={cn(
        "mx-auto flex h-64 w-full max-w-xs items-center justify-center md:h-80 md:max-w-sm",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
