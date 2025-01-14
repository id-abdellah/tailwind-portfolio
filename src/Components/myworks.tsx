import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Projects = {
    image: string
    name: string
    tags: string[]
}

const projects: Projects[] = [
    {
        image: "images/project-1.jpg",
        name: "Full stack music app",
        tags: ["API", "MVC", "Development"]
    },
    {
        image: "images/project-2.jpg",
        name: "Free stock photo app",
        tags: ["API", "SPA"]
    },
    {
        image: "images/project-3.jpg",
        name: "Recipe app",
        tags: ["Development", "API"]
    },
    {
        image: "images/project-4.jpg",
        name: "Real state website",
        tags: ["Web-design", "Development"]
    },
    {
        image: "images/project-5.jpg",
        name: "eCommerce website",
        tags: ["eCommerce", "Development"]
    },
    {
        image: "images/project-6.jpg",
        name: "vCard Personal portfolio",
        tags: ["Web-design", "Development"]
    }
]

export default function MyWorks() {
    return (
        <div id="work" className="container my-16 scroll-mt-16">
            <h1 className="h1 text-gradient text-balance"> My Portfolio Highlights</h1>

            <div className="mt-4 gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 
                x-scrollbar
                max-sm:pb-2
                max-sm:flex
                max-sm:overflow-auto
                max-sm:snap-x
                max-sm:snap-mandatory
                *:max-sm:min-w-[calc(100%-8px)]
                *:max-sm:snap-start
                ">
                {
                    projects.map((p, i) => {
                        return (
                            <div key={i} className="group bg-zinc-900 p-4 rounded-xl">
                                <div>
                                    <img src={p.image} alt="" className="rounded-lg max-w-full md:grayscale group-hover:grayscale-0 transition-all" />
                                </div>
                                <div className="flex justify-between items-center pt-2 gap-1">
                                    <div>
                                        <div className="text-md md:max-lg:text-sm mb-2">{p.name}</div>
                                        <div className="flex gap-1">
                                            {p.tags.map((t, k) => <span key={k} className="bg-zinc-800 text-zinc-500 py-0.5 px-2 rounded-lg text-[10px] border border-zinc-800 cursor-pointer hover:bg-transparent hover:text-zinc-500 transition-colors">{t}</span>)}
                                        </div>
                                    </div>
                                    <div className="bg-sky-500 size-8 rounded-lg text-black grid place-content-center cursor-pointer transition-colors hover:bg-sky-500/50">
                                        <FontAwesomeIcon icon={faLink} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}