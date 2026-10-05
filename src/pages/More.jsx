import { Link, useSearchParams } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Poster from "../components/Poster.jsx";
import WatchButton from "../components/WatchButton.jsx";
import { FILMS, GENRES, PLATFORMS } from "../data/films.js";

const PER_PAGE = 5;
const EDITOR = ["lanterns", "loki", "inter", "spider"];
const year = (m) => Number(m.rel.match(/\d{4}/)?.[0] || 0);
const SORTS = {
  rating: (a, b) => (b.r || 0) - (a.r || 0),
  terbaru: (a, b) => year(b) - year(a),
  judul: (a, b) => a.t.localeCompare(b.t),
};

export default function More() {
  const [sp, setSp] = useSearchParams();
  const g = sp.get("g") || "";
  const q = sp.get("q") || "";
  const pf = sp.get("pf") || "";
  const s = sp.get("s") || "";

  const update = (patch) => {
    const next = Object.fromEntries(sp);
    Object.entries(patch).forEach(([k, v]) =>
      v ? (next[k] = String(v)) : delete next[k],
    );
    setSp(next);
  };
  const setFilter = (patch) => update({ ...patch, p: "" });

  const list = FILMS.filter(
    (m) =>
      (!g || m.g.includes(g)) &&
      (!pf || m.pf.includes(pf)) &&
      (!q || m.t.toLowerCase().includes(q.toLowerCase())),
  ).sort(SORTS[s] || (() => 0));

  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const p = Math.min(Number(sp.get("p")) || 1, pages);

  return (
    <>
      {!q && <Hero />}
      <h2 className="sec">
        {q ? "Hasil Pencarian" : "Jelajahi Juga Film Lainnya"}
      </h2>

      {q && (
        <div className="sr">
          <span>
            Hasil untuk <b>"{q}"</b>: {list.length} film ditemukan
          </span>
          <button className="wl" onClick={() => setFilter({ q: "" })}>
            Hapus pencarian
          </button>
        </div>
      )}

      <div className="tools">
        <label>
          Platform
          <select
            value={pf}
            onChange={(e) => setFilter({ pf: e.target.value })}
          >
            <option value="">Semua</option>
            {Object.keys(PLATFORMS).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Urutkan
          <select value={s} onChange={(e) => setFilter({ s: e.target.value })}>
            <option value="">Default</option>
            <option value="rating">Rating tertinggi</option>
            <option value="terbaru">Rilis terbaru</option>
            <option value="judul">Judul A–Z</option>
          </select>
        </label>
        {(g || pf || s) && (
          <button className="wl" onClick={() => setSp(q ? { q } : {})}>
            Reset filter
          </button>
        )}
      </div>

      <div className="two">
        <div>
          {list.length === 0 && (
            <p className="em">
              Tidak ada film yang cocok. Coba ubah kata kunci, genre, atau
              platform.
            </p>
          )}
          {list.slice((p - 1) * PER_PAGE, p * PER_PAGE).map((m) => (
            <div className="row" key={m.id}>
              <div style={{ width: 70, flex: "none" }}>
                <Poster m={m} />
              </div>
              <div>
                <h3>{m.t}</h3>
                <WatchButton id={m.id} />
                <Link className="l" to={`/film/${m.id}`}>
                  Lihat Detail Film
                </Link>
                <p>{m.d}</p>
              </div>
            </div>
          ))}
          <div className="pg">
            {Array.from({ length: pages }, (_, i) => (
              <span
                key={i}
                className={i + 1 === p ? "on" : ""}
                onClick={() => update({ p: i + 1 })}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        <aside>
          <div className="card">
            <h5>Genre</h5>
            <span
              className={`gn ${g ? "" : "on"}`}
              onClick={() => setFilter({ g: "" })}
            >
              Semua
            </span>
            {GENRES.map((x) => (
              <span
                key={x}
                className={`gn ${g === x ? "on" : ""}`}
                onClick={() => setFilter({ g: x })}
              >
                {x}
              </span>
            ))}
          </div>
          <div className="card">
            <h5>Pilihan Editor</h5>
            <div className="ed">
              {EDITOR.map((id) => (
                <Poster key={id} m={FILMS.find((f) => f.id === id)} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
