import Link from "next/link";
import Image from "next/image";
import styles from "./cover-image.module.scss";
import CoverImageType from "@/types/cover-image";

export default function CoverImage({ href, src, alt, ...imageProps }: CoverImageType) {
  return (
    <div>
      {href ? (
        <Link href={href}>
          <Image className={styles.cover} src={src} alt={alt} {...imageProps}/>
        </Link>
      ) : (
        <Image className={styles.cover} src={src} alt={alt} {...imageProps}/>
      )}
    </div>
  );
}