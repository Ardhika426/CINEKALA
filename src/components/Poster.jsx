import { useNavigate } from "react-router-dom";

export default function Poster({ m, go = true }) {
  const nav = useNavigate();
  const open = () => nav(`/film/${m.id}`);
  const bg = m.poster
    ? `#111 url(${m.poster}) center/cover no-repeat`
    : `linear-gradient(160deg,${m.c[0]},${m.c[1]})`;
  return (
    <div
      className="po"
      style={{ background: bg, cursor: go ? "pointer" : "default" }}
      aria-label={m.t}
      {...(go && {
        tabIndex: 0,
        role: "link",
        onClick: open,
        onKeyDown: (e) => e.key === "Enter" && open(),
      })}
    >
      {!m.poster && m.t}
    </div>
  );
}
