import { FILMS } from "../data/films.js";
import Poster from "./Poster.jsx";

export default function SimilarFilms({ film }) {
  const list = FILMS.filter((f) => f.id !== film.id)
    .map((f) => ({ f, shared: f.g.filter((g) => film.g.includes(g)).length }))
    .filter((x) => x.shared > 0)
    .sort((a, b) => b.shared - a.shared || (b.f.r || 0) - (a.f.r || 0))
    .slice(0, 5)
    .map((x) => x.f);

  if (list.length === 0) return null;

  return (
    <section className="simw">
      <h2 className="sec">Film Serupa</h2>
      <div className="sim">
        {list.map((f) => (
          <div key={f.id}>
            <Poster m={f} />
            <small>{f.t}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
