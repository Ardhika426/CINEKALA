import { useState } from 'react'
import Poster from '../components/Poster.jsx'
import { useWatchlist } from '../context/WatchlistContext.jsx'
import { getFilm } from '../data/films.js'

export default function Watchlist() {
  const { wl, markWatched } = useWatchlist()
  const [tab, setTab] = useState('all')
  const ids = Object.keys(wl)
  const done = ids.filter((i) => wl[i]).length
  const shown = ids.filter((i) => tab === 'all' || (tab === 'done' ? wl[i] : !wl[i]))
  const tabs = [
    ['all', `Semua (${ids.length})`],
    ['todo', `Belum Ditonton (${ids.length - done})`],
    ['done', `Sudah Ditonton (${done})`],
  ]

  return (
    <>
      <h2 style={{ margin: 0, fontSize: 18, color: 'var(--br)' }}>Watch List Saya</h2>
      <div style={{ fontSize: 11 }}>Kelola dan pantau film favoritmu di sini</div>
      <div className="tabs">
        {tabs.map(([k, label]) => (
          <button key={k} className={`tab ${tab === k ? 'on' : ''}`} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>
      {shown.length === 0 ? (
        <p className="em">Belum ada film di sini. Tambahkan dari halaman Jelajahi Film.</p>
      ) : (
        <div className="g6">
          {shown.map((id) => {
            const m = getFilm(id)
            return (
              <div className="wi" key={id}>
                <Poster m={m} />
                <b>{m.t}</b>
                <button className={`tb ${wl[id] ? 'on' : ''}`} onClick={() => markWatched(id)}>Tandai Sudah Ditonton</button>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
