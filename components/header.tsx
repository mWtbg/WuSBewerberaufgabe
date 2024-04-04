import Image from "next/image"

export default function Headere() {

    return(
        <header>
            <Image
                src="/wus.svg"
                width={100}
                height={200}
                alt="W&S Logo"
                className=""
            />
            <h1> This is a Header</h1>
        </header>
    )
}