import { useState } from "react"



const navLinks: Record<string, string>[] = [
    {
        href: "#home",
        content: "Home"
    },
    {
        href: "#about",
        content: "About"
    },
    {
        href: "#work",
        content: "Work"
    },
    {
        href: "#reviews",
        content: "Reviews"
    }
]


export default function Navbar() {

    const [acitveIndex, setActiveIndex] = useState<number>(0);
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    function togglePopoverOpening() {
        setIsPopoverOpen(previous => !previous)
    }

    return (
        <nav className="fixed w-full top-0 right-0 flex items-center justify-between py-2.5 px-2 z-50 backdrop-blur-sm">

            <div className="">
                <a href="">
                    <span className="text-sky-400 font-extrabold text-2xl">Obito</span>
                    <span className="font-bold text-xl">.</span>
                </a>
            </div>

            <ul
                popover="manual"
                id="linksPopover"
                className="sm:block sm:relative px-1 py-1 rounded-md bg-zinc-900">
                <div className="flex">
                    {
                        navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        data-active={acitveIndex == index ? "true" : "false"}
                                        onClick={() => setActiveIndex(index)}
                                        href={link.href}
                                        className="text-zinc-50/50 py-1.5 px-3 rounded-md font-medium text-sm block"
                                    >{link.content}</a>
                                </li>
                            )
                        })
                    }
                </div>
            </ul>

            <div className="h-[35px] flex gap-3">
                <button onClick={() => location.hash = "contact"} className="bg-white rounded-md text-black font-sm text-base h-full px-2 grid place-content-center border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors">
                    <span>Contact Me</span>
                </button>
                <button
                    id="linksPopoverOpener"
                    popoverTarget="linksPopover"
                    onClick={togglePopoverOpening}
                    data-isopen={isPopoverOpen}
                    className="group data-[isopen=true]:bg-transparent data-[isopen=true]:border-zinc-50/10 sm:hidden transition-colors flex flex-col justify-evenly h-full w-[35px] bg-zinc-50/10 rounded-md p-1.5 cursor-pointer border-[2px] border-transparent hover:border-zinc-50/10 hover:bg-transparent *:block *:w-full *:h-0.5 *:rounded-md *:bg-zinc-50 *:transition-all"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}