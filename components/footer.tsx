'use client';

import { getVisitorCount } from "@/app/lib/data"

export default function Footer() {
   async function showtVisitorCount(){
    const response = await fetch('/api');

    if (!response.ok){
      console.log("Error: "+ response.statusText);
    }

    console.log(await response.json());
   }

    return(
        <footer>
            <h1> This is a Footer</h1>
            <button onClick={showtVisitorCount}>Visitor Count</button>
        </footer>
    )
}