import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Navbar from "./navbar"
import Hero from "./hero"

export default function Header() {
    return (
        <header className="h-svh grid place-content-center container relative" id="home">
            <Navbar />
            <Hero />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-zinc-50/10 w-6 h-10 grid place-content-center text-sm rounded-full">
                <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
            </div>
        </header>
    )
}