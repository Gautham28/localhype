import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/lh-logo.png"
        alt="LocalHype"
        width={630}
        height={149}
        priority
        className={cn("h-8 w-auto md:h-9", imageClassName)}
      />
    </Link>
  );
}
