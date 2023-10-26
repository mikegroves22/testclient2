import './App.css';
//import Login from './pages/login';
//import { HashRouter,Routes, Route } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"


function App() {
  return (
    <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <Login />
            </Route>
          </Switch>
          </div>
  );
}

export default App;
