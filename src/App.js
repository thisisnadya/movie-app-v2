import SideNav from "./components/SideNav";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <SideNav />
        </div>
        <div>
          <Pages />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
