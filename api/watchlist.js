export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');

  const TRAKT_CLIENT_ID = process.env.TRAKT_CLIENT_ID;
  const USERNAME = process.env.TRAKT_USERNAME || 'Asad991';

  if (!TRAKT_CLIENT_ID) {
    return res.status(200).json({ shows: [], movies: [], error: 'TRAKT_CLIENT_ID not configured' });
  }

  const headers = {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": TRAKT_CLIENT_ID,
  };

  try {
    // Fetch both watchlists in parallel
    const [showsRes, moviesRes] = await Promise.all([
      fetch(`https://api.trakt.tv/users/${USERNAME}/watchlist/shows?sort=added,asc`, { headers }),
      fetch(`https://api.trakt.tv/users/${USERNAME}/watchlist/movies?sort=added,asc`, { headers }),
    ]);

    if (!showsRes.ok || !moviesRes.ok) {
      throw new Error(`Trakt API error: shows=${showsRes.status}, movies=${moviesRes.status}`);
    }

    const [showsData, moviesData] = await Promise.all([
      showsRes.json(),
      moviesRes.json(),
    ]);

    const shows = Array.isArray(showsData)
      ? showsData.slice(0, 3).map(item => item?.show?.title || 'Unknown')
      : [];
    const movies = Array.isArray(moviesData)
      ? moviesData.slice(0, 3).map(item => item?.movie?.title || 'Unknown')
      : [];

    res.status(200).json({ shows, movies });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Trakt watchlist', detail: error.message });
  }
}
