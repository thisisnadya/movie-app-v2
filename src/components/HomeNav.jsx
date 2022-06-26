import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .title {
      font-size: 2rem;
    }
  }
`;

const Category = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

const Slink = styled(NavLink)`
  margin-right: 2rem;
  text-decoration: none;
  color: #c8c6c6;
  &:hover {
    color: #f3f1f5;
  }
  &.active {
    color: #f3f1f5;
  }
  @media (max-width: 998px) {
    h5 {
      font-size: 1rem;
    }
  }
`;
export default HomeNav;
