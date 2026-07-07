import "./App.css";
// import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import FounderVision from "./components/Founde/Founder";

import Hero from "./components/HeroGrid/HeroGrid";
import Word from "./components/Our-work/Word";
import Projects from "./components/Projects";
import Team from "./components/Team/Team";
import Video from "./components/Video-sec/Video";
import Whtwedo from "./components/What-we-do/wwd";


function App() {
  return (
    <div className="app">

      {/* Hero */}
      <Hero />

      {/* Everything comes over Hero */}
      <main className="overlay-content">

        <section className="page">
     <Video />
        </section>

       
        <section className="page">
      <Whtwedo />
        </section>


        <section className="page">
   <Word />
        </section>


 <section className="page">
   <Team />
        </section>



 <section className="page">
   <FounderVision />
        </section>


<Footer />
      </main>

    </div>
  );
}

export default App;