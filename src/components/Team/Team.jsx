import { useRef } from "react";
import "./team.css";

const team = [
  {
    name: "Kylee Danford",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    name: "Tynisha Obey",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    name: "Hannah Burress",
    role: "Art Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  },
  {
    name: "Cyndy Lillian",
    role: "Visual Designer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800",
  },
  {
    name: "James Oliver",
    role: "Motion Designer",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800",
  },
  {
    name: "Sophia Wilson",
    role: "UI / UX Designer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="team-section">

      <div className="team-header">

        <div>

          <span className="team-subtitle">
            OUR PEOPLE
          </span>

          <h1 className="team-title">
            Meet our team
          </h1>

          <p className="team-description">
            Meet our exceptional team of designers, strategists and creatives.
            Together we craft memorable experiences through collaboration,
            innovation and timeless design.
          </p>

        </div>

        <div className="team-buttons">

          <button onClick={scrollLeft}>
            ←
          </button>

          <button onClick={scrollRight}>
            →
          </button>

        </div>

      </div>

      <div className="team-slider" ref={sliderRef}>

        {team.map((member, index) => (

          <div className="team-card" key={index}>

            <div className="team-image">

              <img src={member.image} alt={member.name} />

            </div>

            <h3>{member.name}</h3>

            <span>{member.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
}