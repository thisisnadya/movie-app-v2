import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Wrapper, SmallCard } from "./StyledComponents";

function UpcomingMovie() {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    getTrending();
  }, []);
  const getTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await data.json();
    setUpcoming(result.results);
  };

  return (
    <Wrapper>
      <h1 className="py-3">Upcoming Movies</h1>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints: {
            1600: {
              perPage: 4,
            },
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
        {upcoming.map((item) => (
          <SplideSlide>
            <SmallCard key={item.id}>
              <Link to={`/movie/detail/${item.id}`}>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
            </SmallCard>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

export default UpcomingMovie;
