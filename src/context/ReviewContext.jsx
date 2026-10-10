import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const useReviews = () => useContext(Ctx);

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cinekala-reviews")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cinekala-reviews", JSON.stringify(reviews));
    } catch {}
  }, [reviews]);

  const addReview = (filmId, review) =>
    setReviews((p) => ({
      ...p,
      [filmId]: [
        {
          id: Date.now(),
          date: new Date().toLocaleDateString("id-ID"),
          ...review,
        },
        ...(p[filmId] || []),
      ],
    }));

  const removeReview = (filmId, id) =>
    setReviews((p) => ({
      ...p,
      [filmId]: (p[filmId] || []).filter((r) => r.id !== id),
    }));

  const statsOf = (filmId) => {
    const list = reviews[filmId] || [];
    const avg = list.length
      ? list.reduce((s, r) => s + r.rating, 0) / list.length
      : 0;
    return { count: list.length, avg };
  };

  return (
    <Ctx.Provider value={{ reviews, addReview, removeReview, statsOf }}>
      {children}
    </Ctx.Provider>
  );
}
