import About from "./Components/aboutme"
import ContactMe from "./Components/contact"
import Footer from "./Components/footer"
import Header from "./Components/header"
import MyWorks from "./Components/myworks"
import Reviews from "./Components/reviews"

function App() {
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
