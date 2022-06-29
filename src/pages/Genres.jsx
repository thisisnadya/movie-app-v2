import { MediumCard, Gradient } from "../components/StyledComponents";
import { Link } from "react-router-dom";

function Genres() {
  const genres = [
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
  ];

  return (
    <div className="d-flex flex-wrap">
      <h1>Movies</h1>
      {genres.map((genre) => (
        <MediumCard>
          <Link to="tv/detail">
            <p>{genre.name}</p>
            <Gradient />
          </Link>
        </MediumCard>
      ))}
    </div>
  );
}

export default Genres;
