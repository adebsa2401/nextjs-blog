import Link from "next/link";
import Image from "next/image";
import CoverImageType from "@/types/cover-image";

export default function CoverImage({ href, src, alt, ...imageProps }: CoverImageType) {
  return (
    <div>
      {href ? (
        <Link href={href}>
          <Image className="w-full" src={src} alt={alt} {...imageProps}/>
        </Link>
      ) : (
        <Image className="w-full" src={src} alt={alt} {...imageProps}/>
      )}
    </div>
  );
}