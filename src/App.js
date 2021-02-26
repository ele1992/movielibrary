import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="activNav" className="Nav" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activNav" className="Nav" to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activNav" className="Nav" to="/discover">
              Discover new movies!
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/discover" component={DiscoverMoviesPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
