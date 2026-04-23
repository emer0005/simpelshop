import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
