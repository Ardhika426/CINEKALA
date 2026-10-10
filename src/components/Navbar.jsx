import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FILMS } from "../data/films.js";

export default function Navbar() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [val, setVal] = useState("");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const key = val.trim().toLowerCase();
  const hits = key
    ? FILMS.filter((m) => m.t.toLowerCase().includes(key)).slice(0, 5)
    : [];

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  const search = () => {
    nav(`/lebih?q=${encodeURIComponent(val.trim())}`);
    setOpen(false);
    setMenu(false);
  };
  const pick = (id) => {
    nav(`/film/${id}`);
    setVal("");
    setOpen(false);
    setMenu(false);
  };

  return (
    <nav>
      <Link to="/" className="logo" aria-label="Cinekala">
        <img src="/Logo.png" alt="Cinekala" />
      </Link>

      <button
        className={`burger ${menu ? "on" : ""}`}
        onClick={() => setMenu(!menu)}
        aria-label="Buka menu"
        aria-expanded={menu}
        aria-controls="menu-utama"
      >
        <span />
        <span />
        <span />
      </button>

      <div id="menu-utama" className={`nr ${menu ? "open" : ""}`}>
        <div className="sb">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            value={val}
            placeholder="Cari Sesuatu......."
            aria-label="Cari film"
            onChange={(e) => {
              setVal(e.target.value);
              setOpen(true);
            }}
            onKeyDown={(e) => e.key === "Enter" && search()}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          />
          {open && hits.length > 0 && (
            <div className="sg">
              {hits.map((m) => (
                <div key={m.id} onMouseDown={() => pick(m.id)}>
                  {m.t}
                </div>
              ))}
              <div onMouseDown={search}>Lihat semua hasil untuk "{val}"</div>
            </div>
          )}
        </div>
        <Link to="/lebih">Jelajahi Film</Link>
        <Link to="/watchlist">Watch List Saya</Link>
      </div>
    </nav>
  );
}
