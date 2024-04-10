import Image from "next/image";

export default function Headere() {
  return (
    <header className="w-full bg-zinc-900 flex text-white px-5">
      <Image
        src="/wus.svg"
        width={90}
        height={100}
        alt="W&S Logo"
        className=" py-3"
      />
    </header>
  );
}
