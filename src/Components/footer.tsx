import { faArrowUpRightFromSquare, faChevronRight, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="container">
            <div className="space-y-4 sm:flex sm:items-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold sm:text-5xl text-gradient text-balance">Let's work together today!</h1>
                    <button className="bg-sky-500 border-[2px] border-sky-500 py-1.5 px-2 rounded-md text-black text-sm font-semibold cursor-pointer transition-colors hover:bg-transparent hover:text-white">Start project <FontAwesomeIcon icon={faChevronRight} className="ml-2" /></button>
                </div>

                <div className="flex items-center justify-evenly sm:w-[50%]">
                    <div className="space-y-1">
                        <p>Sitemap</p>
                        <ul className="*:text-zinc-500 space-y-1 text-sm *:*:transition-colors hover:*:*:text-sky-500 hover:*:*:underline">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <p>Socials</p>
                        <ul className="*:text-zinc-500 text-sm *:*:flex *:*:gap-2 space-y-1 *:*:transition-colors hover:*:*:text-sky-500 hover:*:*:underline">
                            <li><a href="">Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a></li>
                            <li><a href="">Linkedin <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a></li>
                            <li><a href="">Twitter X <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a></li>
                            <li><a href="">Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a></li>
                            <li><a href="">Codepen <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-6 flex items-center justify-between">
                <div className="">
                    <a href="">
                        <span className="text-sky-400 font-extrabold text-xl">Obito</span>
                        <span className="font-bold text-xl">.</span>
                    </a>
                </div>
                <div className="text-[10px]">
                    <span className="text-zinc-500"><FontAwesomeIcon icon={faCopyright} /> 2025</span>
                    <span> ID-ABDELLAH Mohamed</span>
                </div>
            </div>

        </footer>
    )
}