import { useLayoutEffect, useRef } from "react";
import "./wwd.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker";


export default function Whtwedo() {

const section = useRef()

useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
        gsap.to(".bg-title" , {
            y : -180 , 
            ease : "none",
            scrollTrigger : {
                trigger : section.current,
                start : "top bottom",
                end : "bottom top",
                scrub : true
            }
        })


gsap.to(".word", {
        color: "#111",
        opacity: 1,
        stagger: 0.03,
        ease: "none",
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top 75%",
          end: "bottom center",
          scrub: 1,
        },
      });

    } , section)

    return () => ctx.revert();
},[])

return(
    <section className="our-word" ref={section}>
<h1 className="bg-title">What We DO</h1>

<div className="content">
<p className="paragraph">
{text.split("").map((word , ind )=>(
    <span className="word" key={ind}>
        {word} 
    </span>
))}
</p>

<div className="scroll-text">
Scrool to discover
</div>

</div>

    </section>
)

}