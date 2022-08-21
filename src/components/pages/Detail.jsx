import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Similar from "../imports/Similar";
import Recommendations from "../imports/Recommendations";
import Loading from "../imports/Loading";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { DetailWrapper, ButtonWatchlist } from "../styled/StyledComponents";
import { WatchlistContext } from "../../context/WatchlistContext";
import { useContext } from "react";

function Detail() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [seasonNumber, setSeasonNumber] = useState();
  const [buttonWatchlist, setButtonWatchlist] = useState(false);
  const [watchlist, setWatchlist] = useContext(WatchlistContext);

  useEffect(() => {
    getDetail(params.media_type, params.id);
  }, [params.id]);

  const getDetail = async (type, id) => {
    setIsLoading(true);
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      setDetail(data);
      console.log(data);
    } catch (e) {}
    setIsLoading(false);
  };

  const handleWatchlistButton = () => {
    setButtonWatchlist(!buttonWatchlist);
    if (buttonWatchlist) {
      removeFromWatchlist();
    } else {
      addToWatchlist();
    }
  };

  const removeFromWatchlist = () =>
    setWatchlist(watchlist.filter((movie) => movie.id != detail.id));

  const addToWatchlist = () => {
    setWatchlist((prevWatchlist) => [
      ...prevWatchlist,
      {
        title: detail.title ? detail.title : detail.original_name,
        id: detail.id,
        type: params.media_type,
      },
    ]);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <DetailWrapper className="mt-5">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`}
              alt={detail.title}
            />
            <div className="detail">
              {detail.title ? (
                <h2>{`${detail.title} (${detail.release_date.substr(
                  0,
                  4
                )})`}</h2>
              ) : (
                <h2>{detail.original_title}</h2>
              )}
              {detail.name ? (
                <h2>{detail.name}</h2>
              ) : (
                <h2>{detail.original_name}</h2>
              )}
              <h4 className="rate">
                <AiFillStar /> {detail.vote_average}
              </h4>
              {detail.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
              <p className="mt-4">{detail.overview}</p>

              <ButtonWatchlist className="btn" onClick={handleWatchlistButton}>
                {buttonWatchlist ? "Remove From Watchlist" : "Add To Watchlist"}
              </ButtonWatchlist>
            </div>
          </DetailWrapper>
          <Similar media={params.media_type} id={params.id} />
          <Recommendations media={params.media_type} id={params.id} />
        </div>
      )}
    </div>
  );
}

export default Detail;
