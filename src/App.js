import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="Nav" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="Nav" to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="Nav" to="/discover">
              Discover new movies!
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
