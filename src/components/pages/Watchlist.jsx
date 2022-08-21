import { useEffect } from "react";
import { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useContext(WatchlistContext);

  return (
    <div>
      {watchlist.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default Watchlist;
