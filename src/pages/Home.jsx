import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import HowItWorks from "../components/HowItWorks";
import MainFeatures from "../components/MainFeatures";
import Footer from "../components/Footer";


export default function Home (){




    return (
        <main>
            <Navbar />
            <Hero />
            <MainFeatures />
            <HowItWorks />
            <HomeCards />
            <Footer />
        </main>
    )
}