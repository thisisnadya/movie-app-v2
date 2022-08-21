import SideNav from "./components/imports/SideNav";
import Pages from "./components/pages/Pages";
import Search from "./components/imports/Search";
import HomeNav from "./components/imports/HomeNav";
import styled from "styled-components";
import { WatchlistProvider } from "./context/WatchlistContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <WatchlistProvider>
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
      </WatchlistProvider>
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
