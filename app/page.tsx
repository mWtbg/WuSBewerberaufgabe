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
    <main className="">
      <div className="h-screen flex lg:mr-48  items-end justify-between">
        <Image
          src="/chuck.png"
          width={700}
          height ={450}
          alt="Image of Chuck Norris"
          className="lg:w-3/6 grow-0 shrink-0"
        />
        <ChuckQuote />
      </div>
    </main>
  );
}
