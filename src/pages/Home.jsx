import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Poster from "../components/Poster.jsx";
import { FILMS } from "../data/films.js";

export default function Home() {
  return (
    <>
      <Hero />
      <h2 className="sec">Jelajahi Juga Film Lainnya</h2>
      <div className="g6">
        {FILMS.slice(4, 10).map((m) => (
          <div key={m.id}>
            <Poster m={m} />
          </div>
        ))}
      </div>
      <div className="more">
        <Link to="/lebih">Lihat Lebih Banyak ›</Link>
      </div>
    </>
  );
}
