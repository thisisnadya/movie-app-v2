import SideNav from "./components/SideNav";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import HomeNav from "./components/HomeNav";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <SideNav />
        </div>
        <div className="pages">
          <Nav>
            <HomeNav />
            <Search />
          </Nav>
          <Pages />
        </div>
      </div>
    </BrowserRouter>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export default App;
