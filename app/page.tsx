import ChuckQuote from "@/components/chuckQuote";
import Image from 'next/image'

export default function Home() {
  /*async function handleOnHelloClick(){
      const response = await fetch('/api');

      if (!response.ok){
        console.log("Error: "+ response.statusText);
      }

      console.log(await response.json());

      //return await response.json;
  }*/


  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <Image
        src="/wus.svg"
        width={1000}
        height ={760}
        alt="Image of Chuck Norris"
        className=""
      />
      <ChuckQuote />
    </main>
  );
}
