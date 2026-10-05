import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="nf">
      <div className="n4">404</div>
      <h2>Halaman tidak ditemukan</h2>
      <p>Film atau halaman yang kamu cari tidak ada, atau sudah dipindahkan.</p>
      <Link to="/" className="btn">
        Kembali ke Beranda
      </Link>
      <Link to="/lebih" className="btn alt">
        Jelajahi Film
      </Link>
    </div>
  );
}
