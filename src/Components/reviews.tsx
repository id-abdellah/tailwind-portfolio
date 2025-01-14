import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"
import dragToScroll from "../utils/dragToScroll"


type Testimonial = {
    pic: string
    rate: number
    said: string
    name: string
    job: string
}

const testimonials: Testimonial[] = [
    {
        pic: "images/people-1.jpg",
        rate: 5,
        said: "This service completely exceeded my expectations. The attention to detail, customer support, and overall experience were simply outstanding. I've already recommended it to all my friends and colleagues!",
        name: "Alice Johnson",
        job: "Software Engineer",
    },
    {
        pic: "images/people-2.jpg",
        rate: 4,
        said: "A very solid experience! The team was helpful, and the service was delivered promptly. I think a few minor improvements could make it even better, but overall, I'm satisfied.",
        name: "Robert Smith",
        job: "Marketing Manager",
    },
    {
        pic: "images/people-3.jpg",
        rate: 3,
        said: "I found the service to be decent, but it didn't quite live up to the hype. There were a few issues with communication, but the team did try to resolve them. It's worth considering for the price point.",
        name: "Emily Davis",
        job: "Graphic Designer",
    },
    {
        pic: "images/people-4.jpg",
        rate: 5,
        said: "Fantastic experience from start to finish! The quality of work and the professionalism displayed by the team were remarkable. I'll definitely be returning for future needs.",
        name: "James Brown",
        job: "Entrepreneur",
    },
    {
        pic: "images/people-5.jpg",
        rate: 4,
        said: "I was very impressed by the quality and efficiency of the service. The team went above and beyond to ensure I was happy with the results. A minor issue was quickly addressed. Great job overall!",
        name: "Sophia Martinez",
        job: "Product Manager",
    },
    {
        pic: "images/people-6.jpg",
        rate: 5,
        said: "This was hands down the best experience I've had with a service like this. Everything was delivered exactly as promised, and the team was incredibly accommodating. I'm thrilled with the results!",
        name: "Daniel Lee",
        job: "Architect",
    },
    {
        pic: "images/people-1.jpg",
        rate: 4,
        said: "The service was quite good, and the team was responsive to my questions. While it wasn't perfect, I still think it was a worthwhile investment. Keep up the great work!",
        name: "Mia Walker",
        job: "Content Creator",
    },
    {
        pic: "images/people-2.jpg",
        rate: 3,
        said: "The experience was fairly average for me. While there were a few standout moments, I felt that some aspects could have been better explained or more polished. Still, a decent option.",
        name: "Ethan Hall",
        job: "Teacher",
    },
    {
        pic: "images/people-3.jpg",
        rate: 5,
        said: "Exceptional service! The team was extremely professional and attentive. They truly understood my needs and delivered results that surpassed my expectations. I couldn't be happier!",
        name: "Charlotte Green",
        job: "Interior Designer",
    },
    {
        pic: "images/people-4.jpg",
        rate: 4,
        said: "The overall experience was excellent. The quality of work, communication, and timeliness were all on point. A few small improvements could take this from great to perfect!",
        name: "Henry Wilson",
        job: "Photographer",
    },
    {
        pic: "images/people-5.jpg",
        rate: 5,
        said: "I was blown away by the results! The team showed great expertise and care throughout the process. I'll definitely be a returning customer and will spread the word about this fantastic service.",
        name: "Olivia Moore",
        job: "Freelance Writer",
    },
    {
        pic: "images/people-6.jpg",
        rate: 4,
        said: "Good service overall, and the team was friendly and easy to work with. There were a few minor hiccups, but they handled everything professionally. I'm pleased with the results.",
        name: "Liam Taylor",
        job: "Web Developer",
    },
    {
        pic: "images/people-1.jpg",
        rate: 4,
        said: "This was an incredible experience! The team was very detail-oriented and went out of their way to ensure I was satisfied. I highly recommend their services to anyone looking for quality work.",
        name: "Amelia Clark",
        job: "Digital Marketer",
    },
    {
        pic: "images/people-2.jpg",
        rate: 5,
        said: "Truly outstanding! Everything was handled with such care and professionalism. I couldn't have asked for a better experience. Thank you for making this process so seamless and enjoyable.",
        name: "Noah Harris",
        job: "Business Analyst",
    },
    {
        pic: "images/people-3.jpg",
        rate: 4,
        said: "A solid choice for anyone looking for reliable service. The team was efficient and communicative throughout. I'm happy with the outcome and would consider using their services again in the future.",
        name: "Isabella King",
        job: "Project Manager",
    },
];

export default function Reviews() {

    const scrollable = useRef(null)

    useEffect(() => {
        if (!scrollable.current) return;
        dragToScroll(scrollable.current)
    }, [])

    return (
        <section data-aos="fade-up" id="reviews" className="scroll-mt-16 my-16 max-sm:px-2">
            <h1 className="h1 container text-gradient">What our customers say</h1>

            <div ref={scrollable} className="x-scrollbar snap-x snap-mandatory mt-2 px-1 overflow-auto flex gap-2 cursor-grabbing select-none">
                {
                    testimonials.map((customer, i) => {
                        return (
                            <div key={i} className="bg-zinc-900 rounded-xl space-y-3.5 p-4 max-sm:snap-start min-w-full sm:min-w-[400px]">
                                <div className="text-yellow-500 text-xs">
                                    {[...Array(customer.rate)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                                </div>
                                <div className="text-balance line-clamp-3 text-zinc-400 text-sm">
                                    {customer.said}
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <img src={customer.pic} alt="" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-lg">{customer.name}</span>
                                        <span className="text-zinc-400 text-sm font-medium">{customer.job}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}