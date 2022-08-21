import { Gradient, GenreCard } from "../styled/StyledComponents";
import { Link } from "react-router-dom";
import GENRES from "../../data/Genres";

function Genres() {
  return (
    <div>
      <h1>Movies</h1>
      <div className="d-flex flex-wrap justify-content-around align-items-center mt-5">
        {GENRES &&
          GENRES.map((item) => (
            <GenreCard key={item.id}>
              <Link to={`/genres/movie/${item.id}`}>
                <img className="img-fluid" src={item.image} alt="" />
                <p>{item.name}</p>
              </Link>
              <Gradient />
            </GenreCard>
          ))}
      </div>
    </div>
  );
}

export default Genres;
