import { Grid, MiniCard, NextPage } from "../styled/StyledComponents";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../imports/Loading";

function Searched() {
  const params = useParams();
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getSearchedList(params.search);
  }, [params.search, page]);

  const getSearchedList = async (title) => {
    setIsLoading(true);
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${title}&page=${page}`
      );
      const data = await api.json();
      setSearched(data.results);
    } catch (e) {}
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid className="mt-5">
          {searched.map((item) => {
            return (
              <MiniCard key={item.id}>
                <Link to={`/${item.media_type}/detail/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </Link>
              </MiniCard>
            );
          })}
        </Grid>
      )}
      <NextPage onClick={() => setPage(page + 1)}>Next Page</NextPage>
    </div>
  );
}

export default Searched;
