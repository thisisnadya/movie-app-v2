import { createContext, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = (props) => {
  const [watchlist, setWatchlist] = useState([
    {
      title: "Papillon",
      id: 1234,
      type: "movie",
    },
    {
      title: "Django Unchained",
      id: 1235,
      type: "movie",
    },
    {
      title: "ATM",
      id: 1236,
      type: "movie",
    },
  ]);
  return (
    <WatchlistContext.Provider value={[watchlist, setWatchlist]}>
      {props.children}
    </WatchlistContext.Provider>
  );
};
