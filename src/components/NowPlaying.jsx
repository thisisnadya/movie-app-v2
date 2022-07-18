import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Wrapper, SmallCard } from "./StyledComponents";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const check = localStorage.getItem("nowPlaying");

    if (check) {
      setNowPlaying(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("nowPlaying", JSON.stringify(result.results));
      setNowPlaying(result.results);
    }
  };

  return (
    <Wrapper>
      <h1 className="py-3">Now Playing</h1>
      <Splide
        options={{
          perPage: 6,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            1200: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {nowPlaying.map((item) => (
          <SplideSlide>
            <SmallCard key={item.id}>
              <Link to={"/movie/detail/" + item.id}>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=""
                />
              </Link>
            </SmallCard>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

export default NowPlaying;
