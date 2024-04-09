"use client";

import React from "react";

interface ChuckResponse {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

function Quotes({quote, isfirstQuote}:{quote: string|undefined, isfirstQuote:boolean}) {
  if (!quote) {
    return null;
  }

  return (
    <svg
      className={'text-end w-8 h-8 text-zinc-900 mb-1 '+ ( isfirstQuote ?  "": "self-end")}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 14"
    >
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export default function ChuckQuote() {
  const [quote, setQuote] = React.useState<string>();

  async function handleOnClick() {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    const chuckResponse = (await response.json()) as ChuckResponse;
    setQuote(chuckResponse.value);
  }

  return (
    <div className="grow h-full text-lg flex gap-50 flex-wrap flex-col items-center">
      <div className="grow-[2]"></div>
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
      <div className="h-2/5 shrink"></div>
    </div>
  );
}
