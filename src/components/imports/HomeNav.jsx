import { Link } from "react-router-dom";
import { Nav, Slink, Category } from "../styled/StyledComponents";

function HomeNav() {
  return (
    <Nav>
      <Link to={"/"}>
        <h3 className="title">showtime</h3>
      </Link>
      <Category>
        <Slink to={"/category/movie"}>
          <h5>Movies</h5>
        </Slink>
        <Slink to={"/category/tv"}>
          <h5>Tv Shows</h5>
        </Slink>
      </Category>
    </Nav>
  );
}

export default HomeNav;
