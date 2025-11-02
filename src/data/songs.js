export const latestMovieSongs = [
  {
    id: 'sajana-title',
    title: 'Sajana Title Song',
    movie: 'SAJANA',
    artist: 'Rajeshwari Pawar & Sonu Nigam',
    coSinger: 'Sonu Nigam',
    type: 'Duet',
    youtubeId: 'SQahm-u_j9c',
    releaseDate: 'June 27, 2025',
    thumbnail: 'https://img.youtube.com/vi/SQahm-u_j9c/maxresdefault.jpg',
    category: 'marathi'
  },
  {
    id: 'moti-ghamache',
    title: 'Moti Ghamache',
    movie: 'SAJANA',
    artist: 'Rajeshwari Pawar & Sonu Nigam',
    coSinger: 'Sonu Nigam',
    type: 'Duet',
    youtubeId: 'wxgP3FoUVAU',
    releaseDate: 'June 27, 2025',
    thumbnail: 'https://img.youtube.com/vi/wxgP3FoUVAU/maxresdefault.jpg',
    category: 'marathi'
  },
  {
    id: 'aabhal-raatila',
    title: 'Aabhal Raatila',
    movie: 'SAJANA',
    artist: 'Rajeshwari Pawar & Adarsh Shinde',
    coSinger: 'Adarsh Shinde',
    type: 'Duet',
    youtubeId: 'Op8AAmyLsbc',
    releaseDate: 'June 27, 2025',
    thumbnail: 'https://img.youtube.com/vi/Op8AAmyLsbc/maxresdefault.jpg',
    category: 'marathi'
  },
  {
    id: 'zoka',
    title: 'Zoka',
    movie: 'SAJANA',
    artist: 'Rajeshwari Pawar & Onkarswaroop Bagde',
    coSinger: 'Onkarswaroop Bagde',
    type: 'Duet',
    youtubeId: 'weQQGrF2Usc',
    releaseDate: 'June 27, 2025',
    thumbnail: 'https://img.youtube.com/vi/weQQGrF2Usc/maxresdefault.jpg',
    category: 'marathi'
  }
]

export const discographyData = [
  {
    id: 'gadbadgeet',
    title: 'Gadbadgeet',
    movie: 'Naach Ga Ghuma',
    director: 'Paresh Mokashi',
    artist: 'Rajeshwari Pawar',
    type: 'Title Song',
    youtubeId: 'YLkSSg97-zU',
    year: '2024',
    thumbnail: 'https://img.youtube.com/vi/YLkSSg97-zU/maxresdefault.jpg',
    category: 'marathi'
  },
  {
    id: 'international-1',
    title: 'Tomorrowland Release',
    artist: 'Rajeshwari Pawar',
    type: 'International',
    youtubeId: 'oiHY2EBKmOY',
    year: '2023',
    thumbnail: 'https://img.youtube.com/vi/oiHY2EBKmOY/maxresdefault.jpg',
    category: 'international',
    description: 'Released at Tomorrowland Festival'
  },
  ...latestMovieSongs
]

export const showreelData = {
  youtubeId: 'rbXwotu8bo8',
  title: 'Rajeshwari Pawar - Showreel',
  description: 'A compilation of performances and playback songs',
  thumbnail: 'https://img.youtube.com/vi/rbXwotu8bo8/maxresdefault.jpg'
}

export const collaborations = [
  { name: 'Sonu Nigam', image: '/images/artists/sonu-nigam.jpg' },
  { name: 'Adarsh Shinde', image: '/images/artists/adarsh-shinde.jpg' },
  { name: 'Avadhoot Gupte', image: '/images/artists/avadhoot-gupte.jpg' },
  { name: 'Rahul Deshpande', image: '/images/artists/rahul-deshpande.jpg' },
  { name: 'Avadhoot Gandhi', image: '/images/artists/avadhoot-gandhi.jpg' },
  { name: 'Bappi Lahiri', image: '/images/artists/bappi-lahiri.jpg' }
]

export const categories = [
  { id: 'all', label: 'All', count: discographyData.length },
  { id: 'marathi', label: 'Marathi Cinema', count: discographyData.filter(s => s.category === 'marathi').length },
  { id: 'hindi', label: 'Hindi/Bollywood', count: 0 },
  { id: 'international', label: 'International', count: discographyData.filter(s => s.category === 'international').length },
  { id: 'tv', label: 'TV Serials', count: 0 }
]