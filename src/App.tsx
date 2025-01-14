import { useEffect } from "react"
import About from "./Components/aboutme"
import ContactMe from "./Components/contact"
import Footer from "./Components/footer"
import Header from "./Components/header"
import MyWorks from "./Components/myworks"
import Reviews from "./Components/reviews"

import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({ once: true, duration: 500 })
  }, [])

  return (
    <div className="">
      <Header />
      <About />
      <MyWorks />
      <Reviews />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
