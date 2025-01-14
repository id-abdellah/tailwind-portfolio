import { faCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
    return (
        <main className="flex items-center">

            <div className="space-y-8 md:space-y-4 md:w-1/2">

                <div className="flex items-center gap-3">
                    <img src="images/avatar-1.jpg" alt="avatar image" className="rounded-md" />
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-green-500"><FontAwesomeIcon icon={faCircle} /></span>
                        <span className="text-xs text-zinc-500 font-bold">Available for work</span>
                    </div>
                </div>

                <div>
                    <h1 className="font-extrabold text-4xl text-balance text-gradient">Building Scalable Modern Websites For the Future</h1>
                </div>

                <div>
                    <button className="bg-sky-500 text-zinc-900 text-sm py-2 px-3 rounded-md flex items-center gap-2 font-semibold border-[2px] border-sky-500 cursor-pointer transition-colors hover:bg-transparent hover:text-white active:scale-95">
                        <span>Download CV</span>
                        <span><FontAwesomeIcon icon={faDownload} /></span>
                    </button>
                </div>

            </div>

            <div className="hidden md:block w-1/2">
                <div className="size-64 mx-auto relative rounded-b-xl bg-gradient-to-t from-sky-500 to-zinc-800 to-80%">
                    <img src="images/hero-banner.png" alt="" className="block w-64 absolute bottom-0 left-[50%] translate-x-[-50%]" />
                </div>
            </div>
        </main>
    )
}