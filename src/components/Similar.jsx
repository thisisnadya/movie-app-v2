import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Wrapper, SmallCard } from "./StyledComponents";

function Similar({ media, id }) {
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    getSimilar(media, id);
  }, [media, id]);
  const getSimilar = async (type, id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await data.json();
    setSimilar(result.results);
  };

  return (
    <Wrapper>
      <h1 className="py-3">Similar Shows</h1>
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
        {similar.map((item) => (
          <SplideSlide>
            <SmallCard key={item.id}>
              <Link to={`/${media}/detail/${item.id}`}>
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

export default Similar;
