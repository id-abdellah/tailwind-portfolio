

type tech = {
    name: string,
    desc: string,
    icon: string
}

const techstack: tech[] = [
    {
        name: "Figma",
        desc: "Design Tool",
        icon: "/images/figma.svg"
    },
    {
        name: "CSS",
        desc: "User Interface",
        icon: "/images/css3.svg"
    },
    {
        name: "JavaScript",
        desc: "Interactions",
        icon: "images/javascript.svg"
    },
    {
        name: "NodeJS",
        desc: "Web Server",
        icon: "images/nodejs.svg"
    },
    {
        name: "ExpressJS",
        desc: "Node Framework",
        icon: "images/expressjs.svg"
    },
    {
        name: "MongoDB",
        desc: "Database",
        icon: "images/mongodb.svg"
    },
    {
        name: "React",
        desc: "JS Lib",
        icon: "images/react.svg"
    },
    {
        name: "TailwindCSS",
        desc: "CSS Framework",
        icon: "images/tailwindcss.svg"
    }
]

export default function About() {
    return (
        <section id="about" className="container my-16 scroll-mt-[60px]">

            <div className="container bg-zinc-50/10 p-6 sm:rounded-lg">
                <p className="text-sm text-center text-balance text-zinc-200 lg:w-[80%] lg:text-start">
                    Welcome! I'm Obito, a professional web developer with a knack for crafting visually stunning and highly functional websites. <br />
                    Combining creativity and technical expertiste. I transform your vision into degital masterpiece that excels in both appearance and performance.
                </p>

                <div className="flex items-center gap-6 mt-6 *:flex *:flex-col">
                    <div className="">
                        <span className="font-extrabold text-2xl">45
                            <span className="text-sky-500 font-bold">+</span>
                        </span>
                        <span className="text-zinc-400 text-xs">Project Done</span>
                    </div>
                    <div>
                        <span className="font-extrabold text-2xl">10
                            <span className="text-sky-500 font-bold">+</span>
                        </span>
                        <span className="text-zinc-400 text-xs">Years of experience</span>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-gradient h1">Essential Tools I Use</h1>
                <p className="text-sm text-zinc-400 font-medium pt-2 pb-4">Discover the powerful and technologies i use to create exceptional, high-performing websites & application</p>

                <div className="x-scrollbar sm:grid gap-3 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] overflow-auto w-full flex snap-mandatory snap-x pb-2">
                    {
                        techstack.map((tech, index) => {
                            return (
                                <div key={index} className="group min-w-[calc(50%-12px)] sm:w-auto flex items-center gap-2.5 border-[2px] border-zinc-50/10 rounded-lg p-1.5 cursor-pointer transition-colors hover:bg-zinc-50/10 snap-start sm:snap-none">
                                    <div className="group-hover:bg-zinc-800 bg-zinc-50/10 rounded-lg *:w-8 p-1.5 transition-colors">
                                        <img src={tech.icon} alt={`${tech.name} ${tech.desc}`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-zinc-200 text-base">{tech.name}</span>
                                        <span className="text-zinc-500 text-sm font-medium">{tech.desc}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}