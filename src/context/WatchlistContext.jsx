import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const useWatchlist = () => useContext(Ctx);

export function WatchlistProvider({ children }) {
  const [wl, setWl] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cinekala-wl")) || {};
    } catch {
      return {};
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("cinekala-wl", JSON.stringify(wl));
    } catch {}
  }, [wl]);

  const add = (id) => setWl((p) => (id in p ? p : { ...p, [id]: false }));
  const markWatched = (id) => setWl((p) => ({ ...p, [id]: true }));

  return (
    <Ctx.Provider value={{ wl, add, markWatched }}>{children}</Ctx.Provider>
  );
}
