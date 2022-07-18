import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { Card, Gradient } from "./StyledComponents";

function Discover() {
  const [discover, setDiscover] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const check = localStorage.getItem("discover");

    if (check) {
      setDiscover(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const result = await data.json();
      localStorage.setItem("discover", JSON.stringify(result.results));
      setDiscover(result.results);
    }
  };

  return (
    <div>
      <h1 className="py-3">Discover</h1>
      <Splide
        options={{
          perPage: 1,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {discover.map((item) => (
          <SplideSlide>
            <Card key={item.id}>
              <Link to={"/movie/detail/" + item.id}>
                <div className="overview">
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                </div>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.title}
                />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Discover;
