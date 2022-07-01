import { Gradient } from "../components/StyledComponents";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GENRES from "../data/Genres";

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

const GenreCard = styled.div`
  position: relative;
  height: 200px;
  width: 350px;
  margin-bottom: 2rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    border-radius: 1rem;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Heebo", sans-serif;
  }
`;

export default Genres;
