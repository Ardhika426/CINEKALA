import { useNavigate, useParams } from "react-router-dom";
import { getFilm, PLATFORMS, ytEmbed } from "../data/films.js";
import Poster from "../components/Poster.jsx";
import WatchButton from "../components/WatchButton.jsx";
import SimilarFilms from "../components/SimilarFilms.jsx";
import Reviews from "../components/Reviews.jsx";
import NotFound from "./NotFound.jsx";

export default function Detail() {
  const { id } = useParams();
  const nav = useNavigate();
  const m = getFilm(id);
  if (!m) return <NotFound />;

  return (
    <div className="detail">
      <h2 style={{ margin: "0 0 14px", fontSize: 24 }}>{m.t}</h2>
      <div className="dt">
        <Poster m={m} go={false} />
        <div className="vid">
          {m.yt ? (
            <iframe
              src={ytEmbed(m.yt)}
              title={`Trailer ${m.t}`}
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <>
              <div
                className="bg"
                style={{
                  background: `radial-gradient(circle at 60% 60%,${m.c[1]}88,#0d0907 70%)`,
                }}
              />
              <div className="pl" style={{ position: "relative" }} />
              <span>Trailer dummy — isi field yt di data/films.js</span>
            </>
          )}
        </div>
        <div className="nd">
          <b>Nonton Di</b>
          {m.pf.map((p) => {
            const [bg, fg, ic, url] = PLATFORMS[p];
            return (
              <div
                className="pf"
                key={p}
                tabIndex={0}
                onClick={() => window.open(url, "_blank", "noopener")}
              >
                <i style={{ background: bg, color: fg }}>{ic}</i>
                {p}
              </div>
            );
          })}
        </div>
        <div className="inf">
          <p>{m.d}</p>
          <table>
            <tbody>
              <tr>
                <td>Genre</td>
                <td>
                  :{" "}
                  {m.g.map((g, i) => (
                    <span key={g}>
                      <span className="gl" onClick={() => nav(`/lebih?g=${g}`)}>
                        {g}
                      </span>
                      {i < m.g.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Rilis Perdana</td>
                <td>: {m.rel}</td>
              </tr>
              <tr>
                <td>Jumlah Episode</td>
                <td>: {m.ep}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>: ★ {m.r || "N/A"} / 10</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>: {m.st}</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 10 }}>
            <WatchButton id={m.id} />
          </p>
        </div>
      </div>

      <SimilarFilms film={m} />
      <Reviews key={m.id} filmId={m.id} />
    </div>
  );
}
