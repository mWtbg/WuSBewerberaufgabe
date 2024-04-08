"use client";

import { getVisitorCount } from "@/app/lib/data";

export default function Footer() {
  async function showtVisitorCount() {
    const response = await fetch("/api");

    if (!response.ok) {
      console.log("Error: " + response.statusText);
    }

    console.log(await response.json());
  }

  return (
    <footer className="bg-zinc-900 flex text-white min-h-14 px-5">
      <button onClick={showtVisitorCount}>Visitor Count</button>
      <h1 className="self-end"> Bewerberaufgabe Miriam Würtemberger</h1>
    </footer>
  );
}
