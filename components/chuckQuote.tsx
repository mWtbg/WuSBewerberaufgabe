'use client';

import React from "react";

interface ChuckResponse {
    icon_url : string,
    id: string,
    url : string,
    value : string
}

export default function ChuckQuote() {
    const [quote, setQuote] = React.useState<string>();

    async function handleOnClick(){
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const chuckResponse = await response.json() as ChuckResponse;
        setQuote(chuckResponse.value)
    }

    return (<div className="grow min-w-48 h-full text-lg flex gap-50 flex-wrap flex-col items-center">
    <div className="grow shrink"></div>
    <p>{quote}</p>
    <div className="grow shrink"></div>
    <button onClick={handleOnClick}>Chuck Norris says</button>
    <div className="h-80 shrink"></div>
    </div>
    );
}