import Image from "next/image";

export default function Headere() {
  return (
    <header className="w-full bg-zinc-900 flex text-white">
      <Image
        src="/wus.svg"
        width={120}
        height={300}
        alt="W&S Logo"
        className="px-5 py-3"
      />
      <h1> This is a Header</h1>
    </header>
  );
}
