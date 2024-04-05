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
      <div className="h-screen flex min-h-screen items-end justify-between ">
        <Image
          src="/chuck.png"
          width={700}
          height ={450}
          alt="Image of Chuck Norris"
          className="shrink w-[100vh]"
        />
        <ChuckQuote />
      </div>
    </main>
  );
}
