import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FILMS, ytEmbed } from "../data/films.js";
import Poster from "./Poster.jsx";
import WatchButton from "./WatchButton.jsx";

export default function Hero() {
  const nav = useNavigate();
  const [feat, setFeat] = useState(0);
  const [order, setOrder] = useState([1, 2, 3]);
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 720px)").matches,
  );
  const m = FILMS[feat];
  const img = m.backdrop || m.poster;

  const swap = (i) => {
    setOrder(order.map((o) => (o === i ? feat : o)));
    setFeat(i);
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const onChange = (e) => setMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!mobile) return;
    const t = setTimeout(() => {
      setHover(false);
      swap((feat + 1) % 4);
    }, 10000);
    return () => clearTimeout(t);
  }, [mobile, feat, order]);
  return (
    <>
      <h2 className="sec">Film Yang Sedang Populer</h2>
      <div className="hero">
        <div
          className="big"
          onClick={() => nav(`/film/${m.id}`)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="bg"
            style={{
              background: img
                ? `#111 url(${img}) center/cover no-repeat`
                : `radial-gradient(circle at 70% 30%,${m.c[1]},${m.c[0]} 70%)`,
            }}
          />
          <div className="tr">
            {hover && m.yt ? (
              <iframe
                title={`Trailer ${m.t}`}
                src={ytEmbed(m.yt, { auto: true, start: 10, end: 30 })}
                allow="autoplay; encrypted-media"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            ) : (
              <>
                <div className="pl" />
                Trailer singkat {m.t} (dummy)
                <div className="bar">
                  <i key={m.id} />
                </div>
              </>
            )}
          </div>
          <div className="bi">
            <div style={{ width: 78, flex: "none" }}>
              <Poster m={m} go={false} />
            </div>
            <div>
              <h3>{m.t}</h3>
              <p>{m.d}</p>
              <div className="mt">
                <span className="rt">★ {m.r || "N/A"}</span>
                <WatchButton id={m.id} />
              </div>
            </div>
          </div>
        </div>
        <div className="side">
          <h4>Lihat yang lainnya juga</h4>
          {order.map((i) => {
            const x = FILMS[i];
            return (
              <div
                className="si"
                key={x.id}
                tabIndex={0}
                onClick={() => swap(i)}
                onKeyDown={(e) => e.key === "Enter" && swap(i)}
              >
                <Poster m={x} go={false} />
                <div>
                  <b>{x.t}</b>
                  <Link
                    to={`/film/${x.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <small>Lihat Detail Film</small>
                  </Link>
                  <em>★ {x.r || "N/A"}</em>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
