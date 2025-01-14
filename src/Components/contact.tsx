import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMe() {
    return (
        <section id="contact" className="container md:flex md:justify-between md:items-center md:gap-4 my-16 scroll-mt-16">

            <div className="lg:w-[280px] lg:flex lg:flex-col">
                <h1 className="h1 text-gradient">Contact me for collabortion</h1>
                <p className="text-zinc-400 text-sm mt-2">Reach out today to discuss your project needs and start collaborating on something amazing!</p>
                <ul className="flex items-center gap-2 mt-3 *:border-[2px] *:border-zinc-50/10 *:rounded-md *:size-8 *:grid *:place-content-center *:cursor-pointer *:transition-colors hover:*:bg-zinc-100 hover:*:text-zinc-700">
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                    <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                </ul>
            </div>

            <div className="mt-6">
                <form action="" className="space-y-3">
                    <div className="flex flex-col gap-3 *:flex *:flex-col sm:flex-row *:flex-1">
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Your name" className="bg-zinc-50/10 p-2 rounded-md focus:ring-sky-500 focus:ring-2 outline-none" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Your email" className="bg-zinc-50/10 p-2 rounded-md focus:ring-sky-500 focus:ring-2 outline-none" required />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea required placeholder="Your message here ..." className="bg-zinc-50/10 p-2 rounded-md resize-none min-h-28 focus:ring-sky-500 focus:ring-2 outline-none"></textarea>
                    </div>
                    <input type="submit" defaultValue={"Submit"} className="bg-sky-500 w-full p-2 rounded-md text-black cursor-pointer transition-colors border-[2px] border-sky-500 hover:bg-transparent hover:text-white" />
                </form>
            </div>
        </section>
    )
}