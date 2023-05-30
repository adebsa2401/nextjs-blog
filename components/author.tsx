import Image from "next/image";
import AuthorType from "@/types/author";
import styles from "@/components/author.module.scss";

export default function Author({ name, picture }: AuthorType) {
  return (
    <div className={styles.author}>
      <div>
        <Image className={styles.author__picture} src={picture} alt="dynamic routing cover" width={100} height={100}/>
      </div>
      <div className={styles.author__name}>{name}</div>
    </div>
  )
}
