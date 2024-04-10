"use client";

import { getVisitorCount } from "@/app/lib/data";
import { VisitorCount } from "@prisma/client";
import React, { useEffect } from "react";


interface VistorCount {
  id: number;
  count: number;
}

export default function Footer() {
  const [currentCount, setCurrentCount] = React.useState(0);

  // Fetch count from API and update currentCount state
  async function getCurrentVisitorCount() {
    const response = await fetch("/api", { next: { revalidate: 3 } });
    if (!response.ok) {
      console.log("Error: " + response.statusText);
    }
    const data = (await response.json()) as VisitorCount;
    setCurrentCount(data.count);
  }

  getCurrentVisitorCount();

  return (
    <footer className="bg-zinc-900 flex flex-row justify-between items-center text-white min-h-14 px-5">
      <p className="text-lg p-2">Total visits: {currentCount}</p>
      <p className="font-light"> Bewerberaufgabe Miriam Würtemberger</p>
    </footer>
  );
}
