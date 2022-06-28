import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Wrapper, MediumCard, Gradient } from "./StyledComponents";

function DiscoverTV() {
  const [discover, setDiscover] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const check = localStorage.getItem("discoverTV");

    if (check) {
      setDiscover(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("discoverTV", JSON.stringify(result.results));
      setDiscover(result.results);
    }
  };

  return (
    <Wrapper>
      <h1 className="py-3">Top Picks TV Series</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            768: {
              perPage: 1,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {discover.map((item) => (
          <SplideSlide key={item.id}>
            <MediumCard>
              <Link to={"/tv/detail/" + item.id}>
                <p>{item.name}</p>
                <img
                  // className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.name}
                />
                <Gradient />
              </Link>
            </MediumCard>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

export default DiscoverTV;
