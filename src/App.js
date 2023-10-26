import './App.css';
//import Login from './pages/login';
//import { HashRouter,Routes, Route } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
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
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          </div>
  );
}

export default App;
