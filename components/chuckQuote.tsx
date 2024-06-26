"use client";

import React, { useEffect } from "react";

// Interface for API response
interface ChuckResponse {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

// Big quotes that are shown around the Chuck Norris quote
function Quotes({
  quote,
  isfirstQuote,
}: {
  quote: string | undefined;
  isfirstQuote: boolean;
}) {
  if (!quote) {
    return null;
  }
  return (
    <svg
      className={
        "text-end w-8 h-8 text-zinc-900 mb-1 " +
        (isfirstQuote ? "" : "self-end")
      }
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

// Element that shows quote and button to get new quote
export default function ChuckQuote() {
  const [quote, setQuote] = React.useState<string>();

  // Get new Quote from Api and update qoute state
  async function handleOnClick() {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    const chuckResponse = (await response.json()) as ChuckResponse;
    setQuote(chuckResponse.value);
    console.log("hi");
  }

  //get first quote on pageload
  useEffect(() => {
    handleOnClick();
  }, []);

  return (
    <div className="min-h-[70vh] sm:w-full md:min-h-[50vh] lg:grow lg:h-full lg:p-0 p-5  text-lg flex gap-50 flex-wrap flex-col items-center">
      <div className="lg:grow-[2] grow"></div>
      <blockquote className="flex flex-col">
        <Quotes quote={quote} isfirstQuote={true} />
        <p className="px-9 break-words w-full font-medium text-2xl">{quote}</p>
        <Quotes quote={quote} isfirstQuote={false} />
      </blockquote>
      <div className="grow"></div>
      <div className="bg-zinc-700 p-px shadow-2xl hover:bg-zinc-500 ">
        <button
          onClick={handleOnClick}
          className=" p-3 border-2 border-white bg-zinc-700 text-white font-bold hover:bg-zinc-500 "
        >
          Get a Chuck Norris Quote
        </button>
      </div>
      <div className="lg:h-2/5 md:h-32 shrink"></div>
    </div>
  );
}
