import React from "react";
import Home from "./Home";
import MovieSeries from "./MovieSeries";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Detail from "./Detail";
import Genres from "./Genres";
import ShowByGenres from "./ShowByGenres";
import Watchlist from "./Watchlist";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:type" element={<MovieSeries />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/:media_type/detail/:id" element={<Detail />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="genres/movie/:genre_id" element={<ShowByGenres />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  );
}

export default Pages;
