import Image from "next/image";
import AuthorType from "@/types/author";

export default function Author({ name, picture }: AuthorType) {
  return (
    <div className="flex items-center">
      <div>
        <Image className="w-12 h-12 rounded-full mr-4" src={picture} alt="dynamic routing cover" width={100} height={100}/>
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
