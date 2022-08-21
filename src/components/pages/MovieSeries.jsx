import { Grid, MiniCard, NextPage } from "../styled/StyledComponents";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../imports/Loading";

function MovieSeries() {
  let params = useParams();
  const [movieSeries, setMovieSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovieSeries(params.type);
  }, [params.type, page]);

  const getMovieSeries = async (type) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      const result = await data.json();
      setMovieSeries(result.results);
    } catch (err) {}
    setIsLoading(false);
  };

  return (
    <div>
      <Grid className="mt-5">
        {isLoading ? (
          <Loading />
        ) : (
          movieSeries.map((item) => {
            return (
              <MiniCard key={item.id}>
                <Link to={`/${params.type}/detail/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
              </MiniCard>
            );
          })
        )}
      </Grid>
      <NextPage onClick={() => setPage(page + 1)}>Show more</NextPage>
    </div>
  );
}

export default MovieSeries;
