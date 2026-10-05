import { useState } from "react";
import StarRating from "./StarRating.jsx";
import { useReviews } from "../context/ReviewContext.jsx";

export default function Reviews({ filmId }) {
  const { reviews, addReview, removeReview, statsOf } = useReviews();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const list = reviews[filmId] || [];
  const { count, avg } = statsOf(filmId);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !rating || text.trim().length < 5) {
      setError("Isi nama, pilih bintang, dan tulis ulasan minimal 5 karakter.");
      return;
    }
    addReview(filmId, { name: name.trim(), rating, text: text.trim() });
    setName("");
    setRating(0);
    setText("");
    setError("");
  };

  return (
    <section className="rev">
      <h2 className="sec">Ulasan &amp; Rating Pengguna</h2>
      {count > 0 ? (
        <p className="avg">
          <StarRating value={avg} /> <b>{avg.toFixed(1)}</b> / 5 dari {count}{" "}
          ulasan
        </p>
      ) : (
        <p className="avg">Belum ada ulasan. Jadilah yang pertama!</p>
      )}

      <form className="rf" onSubmit={submit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama kamu"
          maxLength={30}
        />
        <StarRating value={rating} onChange={setRating} />
        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis ulasanmu..."
        />
        {error && (
          <div className="err" role="alert">
            {error}
          </div>
        )}
        <button className="btn">Kirim Ulasan</button>
      </form>

      {list.map((r) => (
        <div className="rv" key={r.id}>
          <div className="rh">
            <b>{r.name}</b>
            <StarRating value={r.rating} />
            <small>{r.date}</small>
            <button className="wl" onClick={() => removeReview(filmId, r.id)}>
              Hapus
            </button>
          </div>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  );
}
