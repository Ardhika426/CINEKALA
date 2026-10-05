const L =
  "Dua polisi antargalaksi, John Stewart dan Hal Jordan, menyelidiki kasus pembunuhan misterius di Bumi yang menyeret mereka ke dalam konspirasi gelap.";

const raw = [
  [
    "lanterns",
    "Lanterns",
    L,
    8.3,
    ["Sci-Fi", "Detective", "Mystery"],
    "16 Agustus 2026",
    "8 episode",
    "Season 1 Completed",
    ["HBO MAX", "Prime Video"],
    "#1d3a34,#7a4b1c",
  ],
  [
    "doomsday",
    "Avengers Doomsday",
    "Para pahlawan Bumi bersatu menghadapi ancaman terbesar dalam sejarah multiverse.",
    0,
    ["Action", "Sci-Fi"],
    "18 Desember 2026",
    "Film",
    "Segera Tayang",
    ["Disney+"],
    "#3a2a0a,#a8741a",
  ],
  [
    "resident",
    "Resident Evil",
    "Seorang penyintas menelusuri wabah misterius yang mengubah kota menjadi sarang mayat hidup.",
    7.6,
    ["Action", "Mystery"],
    "12 September 2026",
    "Film",
    "Tayang",
    ["Prime Video"],
    "#4a0d0d,#1b2a4a",
  ],
  [
    "clayface",
    "Clayface",
    "Seorang aktor yang wajahnya rusak berubah menjadi monster tanah liat yang tak bisa dihentikan.",
    0,
    ["Drama", "Detective"],
    "11 September 2026",
    "Film",
    "Tayang",
    ["HBO MAX"],
    "#111111,#5a4a3a",
  ],
  [
    "loki",
    "Loki",
    "Setelah mencuri Tesseract, Loki dibawa ke Time Variance Authority dan menghadapi risiko dihapus dari waktu.",
    8.2,
    ["Sci-Fi", "Mystery", "Action"],
    "9 Juni 2021",
    "12 episode",
    "Season 2 Completed",
    ["Disney+"],
    "#2a4a3a,#8a6a2a",
  ],
  [
    "love",
    "Even If This Love Dissappear Tonight",
    "Toru, seorang siswa yang sering di-bully, secara keliru mengaku menyukai teman sekelasnya, Maori, yang setiap hari mengalami kehilangan ingatan. Seiring berjalannya hubungan mereka, Toru jatuh cinta padanya meskipun Maori memiliki aturan untuk tidak jatuh cinta. Toru bertekad untuk memberinya kenangan indah melalui pengalaman-pengalaman baru setiap hari.",
    7.9,
    ["Drama", "Romance"],
    "2022",
    "Film",
    "Tayang",
    ["Netflix"],
    "#5a6a2a,#3a2a4a",
  ],
  [
    "spider",
    "Spider-Man: Into the Spider-Verse",
    "Sang pahlawan jaring menembus dimensi untuk menyelamatkan semesta yang saling terhubung.",
    8.7,
    ["Action", "Sci-Fi"],
    "2 Juni 2023",
    "Film",
    "Tayang",
    ["Netflix", "Prime Video"],
    "#9a1a1a,#d4a020",
  ],
  [
    "inter",
    "Interstellar",
    "Sekelompok penjelajah melintasi lubang cacing demi menemukan rumah baru bagi umat manusia.",
    8.7,
    ["Sci-Fi", "Drama"],
    "7 November 2014",
    "Film",
    "Tayang",
    ["Prime Video"],
    "#2a3a4a,#c8d0d8",
  ],
  [
    "closer",
    "Drawing Closer",
    "Dengan sisa waktu hidup hanya satu tahun, Akito yang berusia 17 tahun menemukan makna baru dalam hidupnya dengan membawa kebahagiaan bagi seorang gadis yang menderita penyakit terminal dan hanya memiliki sisa waktu enam bulan.",
    8.0,
    ["Romance", "Drama"],
    "2024",
    "Film",
    "tayang",
    ["Netflix"],
    "#0a2a3a,#4a6a5a",
  ],
  [
    "days",
    "18x2 Beyond Youthful Days",
    "Selama musim panas itu, Jimmy menjadi dekat dengan Ami, seorang backpacker asal Jepang, lalu Ami tiba-tiba pergi. Bertahun-tahun kemudian, sebuah kartu pos membawanya ke Jepang untuk berhadapan dengan cinta pertamanya dan merenungkan siapa dirinya sekarang.",
    7.4,
    ["Romance", "Drama"],
    "2024",
    "Film",
    "Tayang",
    ["Netflix"],
    "#4a2a2a,#d49a7a",
  ],
  [
    "noir",
    "Spider-Noir",
    "Ben Reilly, seorang detektif swasta berpengalaman yang sedang mengalami masa-masa sulit di New York pada tahun 1930-an, terpaksa harus menghadapi masa lalunya—setelah mengalami tragedi yang sangat pribadi—sebagai satu-satunya pahlawan super di kota itu.",
    8.1,
    ["Detective", "Action"],
    "2026",
    "8 episode",
    "Season 1 Completed",
    ["Disney +"],
    "#1a1a2a,#6a4a1a",
  ],
  [
    "spiderTwo",
    "Spider-Man: Across The Spider-Verse",
    "Dalam perjalanannya melintasi multiverse, Miles Morales bertemu dengan tim Spider-People baru, yang terdiri dari para pahlawan dari berbagai dimensi. Namun, ketika para pahlawan itu berselisih pendapat mengenai cara menghadapi ancaman baru, Miles pun berada di persimpangan jalan.",
    7.2,
    ["Action", "Sci-Fi"],
    "2023",
    "Film",
    "Tayang",
    ["Disney+", "Prime Video"],
    "#2a1a4a,#c8602a",
  ],
];

const MEDIA = {
  lanterns: {
    poster: "/posters/lanterns.png",
    yt: "https://youtu.be/7UIBOsuUwc4?si=8DodAKzD7e7I1sH1",
  },
  loki: {
    poster: "/posters/loki.png",
    yt: "https://youtu.be/nW948a-l10?si=4ZIv5cKfbicErcbs",
  },
  days: {
    poster: "/posters/18x2.png",
    yt: "https://youtu.be/PSuYA5JQV-Y?si=11n6q-EhgD1R6Ezr",
  },
  closer: {
    poster: "/posters/drawingcloser.png",
    yt: "https://youtu.be/06Fow1dExzU?si=3kepAeTeJkEpmYxM",
  },
  spider: {
    poster: "/posters/spiderverse.png",
    yt: "https://youtu.be/g4Hbz2jLxvQ?si=GkdSGCWqtTX7BR-q",
  },
  love: {
    poster: "/posters/EITLDT.png",
    yt: "https://youtu.be/Gf61QBEnNGI?si=e7aqmdt3psPNpnN0",
  },
  resident: {
    poster: "/posters/resident.png",
    yt: "https://youtu.be/mNd1gb19A-c?si=ILN-3gkW0m2-57TF",
  },
  clayface: {
    poster: "/posters/clayface.png",
    yt: "https://youtu.be/OGO4Mqvo3jI?si=yZGnoABZO1hh6y-H",
  },
  doomsday: {
    poster: "/posters/doomsday.png",
    yt: "https://youtu.be/irVNGjRFZGk?si=LWhYLiS72EdCibm_",
  },
  inter: {
    poster: "/posters/interstellar.png",
    yt: "https://youtu.be/zSWdZVtXT7E?si=tJWqygbPiRfG6L3J",
  },
  noir: {
    poster: "/posters/noir.png",
    yt: "https://youtu.be/HgMbkitzhEM?si=8XP_ouIKHRC0Es-A",
  },
  spiderTwo: {
    poster: "/posters/spiderTwo.png",
    yt: "https://youtu.be/cqGjhVJWtEg?si=Rp2bvQvfFfG8YV_G",
  },
};

const ytId = (s) =>
  (s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/) || [null, s])[1];

export const ytEmbed = (link, { auto = false, start = 0, end = 0 } = {}) =>
  `https://www.youtube.com/embed/${ytId(link)}?rel=0` +
  (auto ? "&autoplay=1&mute=1&controls=0" : "") +
  (start ? `&start=${start}` : "") +
  (end ? `&end=${end}` : "");

export const FILMS = raw.map(([id, t, d, r, g, rel, ep, st, pf, c]) => ({
  id,
  t,
  d,
  r,
  g,
  rel,
  ep,
  st,
  pf,
  c: c.split(","),
  ...MEDIA[id],
}));

export const GENRES = [
  "Action",
  "Detective",
  "Drama",
  "Mystery",
  "Romance",
  "Sci-Fi",
];

// [warna latar, warna teks, label ikon, url] — ganti url dengan link film per platform
export const PLATFORMS = {
  "HBO MAX": ["#ffffff", "#000000", "HBO", "https://www.hbomax.com"],
  "Prime Video": ["#0f171e", "#ffffff", "prime", "https://www.primevideo.com"],
  Netflix: ["#e50914", "#ffffff", "N", "https://www.netflix.com"],
  "Disney+": ["#113ccf", "#ffffff", "D+", "https://www.disneyplus.com"],
};

export const getFilm = (id) => FILMS.find((f) => f.id === id);
