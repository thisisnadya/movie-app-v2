import { createContext, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = (props) => {
  const [watchlist, setWatchlist] = useState([
    {
      title: "Papillon",
      watchlist: true,
      id: 1234,
    },
    {
      title: "Django Unchained",
      watchlist: true,
      id: 1235,
    },
    {
      title: "ATM",
      watchlist: true,
      id: 1236,
    },
  ]);
  return (
    <WatchlistContext.Provider value={[watchlist, setWatchlist]}>
      {props.children}
    </WatchlistContext.Provider>
  );
};
