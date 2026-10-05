import { useWatchlist } from '../context/WatchlistContext.jsx'

export default function WatchButton({ id }) {
  const { wl, add } = useWatchlist()
  const ada = id in wl
  return (
    <button className="wl" onClick={(e) => { e.stopPropagation(); add(id) }}>
      {ada ? '✓ Ada di Watch List' : 'Tambahkan Ke Watch List'}
    </button>
  )
}
