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

    return (<>
    <p>{quote}</p>
    <button onClick={handleOnClick}>Chuck Norris says</button>
    </>
    );
}