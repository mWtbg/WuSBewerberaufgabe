import ChuckQuote from "@/components/chuckQuote";
import Image from "next/image";

export default function Content() {

  return (
    <main className="">
      <div className="h-screen flex lg:mr-48  items-end justify-between">
        <Image
          src="/chuck.png"
          width={700}
          height={450}
          alt="Image of Chuck Norris"
          className="lg:w-3/6 grow-0 shrink-0"
          priority = {true}
        />
        <ChuckQuote />
      </div>
    </main>
  );
}
