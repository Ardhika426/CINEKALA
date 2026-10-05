export default function StarRating({ value, onChange }) {
  return (
    <span className="stars" aria-label={`Rating ${value} dari 5`}>
      {[1, 2, 3, 4, 5].map((n) =>
        onChange ? (
          <button
            type="button"
            key={n}
            className={n <= value ? "on" : ""}
            onClick={() => onChange(n)}
            aria-label={`${n} bintang`}
          >
            ★
          </button>
        ) : (
          <span key={n} className={n <= Math.round(value) ? "on" : ""}>
            ★
          </span>
        ),
      )}
    </span>
  );
}
