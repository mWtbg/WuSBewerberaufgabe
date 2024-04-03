import ChuckQuote from "@/components/chuckQuote";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Hiiii</h1>
      <ChuckQuote />
    </main>
  );
}
