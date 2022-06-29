import { MediumCard, Gradient } from "../components/StyledComponents";
import { Link } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
);
console.log(images[0]);

function Genres() {
  const genres = [
    { id: 28, name: "Action", path: images[0] },
    { id: 12, name: "Adventure", path: images[1] },
    { id: 16, name: "Animation", path: images[2] },
    { id: 35, name: "Comedy", path: images[3] },
    { id: 80, name: "Crime", path: images[4] },
    { id: 99, name: "Documentary", path: images[5] },
    { id: 18, name: "Drama", path: images[6] },
    { id: 14, name: "Fantasy", path: images[7] },
    { id: 36, name: "History", path: images[8] },
    { id: 27, name: "Horror", path: images[9] },
    { id: 9648, name: "Mystery", path: images[10] },
    { id: 10749, name: "Romance", path: images[11] },
    { id: 878, name: "Science Fiction", path: images[12] },
    { id: 53, name: "Thriller", path: images[13] },
    { id: 10752, name: "War", path: images[14] },
  ];

  return (
    <div className="d-flex flex-wrap">
      <h1>Movies</h1>
      {genres.map((genre) => (
        <MediumCard>
          <Link to="tv/detail">
            <p>{genre.name}</p>
            <img src={genre.path} alt="" />
            <Gradient />
          </Link>
        </MediumCard>
      ))}
    </div>
  );
}

export default Genres;
