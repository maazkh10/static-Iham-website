import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import FounderVision from "./components/Founde/Founder";
import Hero from "./components/HeroGrid/HeroGrid";
import Work from "./components/Our-work/Work";
// import Projects from "./components/Projects";
import About from   "./pages/About/About";
import Team from "./components/Team/Team";
import Video from "./components/Video-sec/Video";
import Whtwedo from "./components/What-we-do/wwd";
import CeoPage from "./pages/Ceo/Ceo-profile";
import ContactPage from "./pages/Contact/Contact";

// Created a separate Home component for your landing page layout
function Home() {
  return (
    <>
      <Hero />
      <main className="overlay-content">
        <section className="page">
          <Video />
        </section>

        <section className="page">
          <Whtwedo />
        </section>

        <section className="page">
          <Work />
        </section>
        <section className="page">
          <FounderVision />
        </section>
        <section className="page">
          <Team />
        </section>


      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Dedicated pages for other components */}
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/ceo-profile" element={<CeoPage />} />
        
        <Route path="/contact-us" element={<ContactPage />} />
        
        </Routes>

        {/* Footer stays visible across all routes */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;