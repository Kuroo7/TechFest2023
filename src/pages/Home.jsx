
import { About } from "../components/About/About"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import PastEvents from "../components/PastEvents/PastEvents"
import Faq from "../components/FAQ/Faq"
import EventCarousel from "../components/EventsCarousel/EventCarousel"
import Events from "../components/Events/Events"

export const Home = () => {


    return (
        <>
            <Hero />
            <About />
            <PastEvents />
            <EventCarousel />
            <Events />
            <Faq />
            <Footer />
        </>
    )
}
