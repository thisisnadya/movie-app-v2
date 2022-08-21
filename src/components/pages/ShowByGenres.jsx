import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../imports/Loading";
import { Grid, MiniCard, NextPage } from "../styled/StyledComponents";
function ShowByGenres() {
  let params = useParams();
  const [resultsByGenre, setResultsByGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getResults(params.genre_id);
  }, [params.genre_id, page]);

  const getResults = async (id) => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=${page}`
      );
      const result = await data.json();
      setResultsByGenre(result.results);
    } catch (err) {}
    setIsLoading(false);
  };
  return (
    <div>
      <Grid className="mt-5">
        {isLoading ? (
          <Loading />
        ) : (
          resultsByGenre.map((item) => {
            return (
              <MiniCard key={item.id}>
                <Link to={`/movie/detail/${item.id}`}>
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

export default ShowByGenres;
