import './App.css';
//import Login from './pages/login';
//import { HashRouter,Routes, Route } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
import Products from './pages/products';
import Tables from './pages/tables';
import Users from './pages/users';


function App() {
  return (
    <div className="App">
          
            <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/tables" element={<Tables />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
          </div>
  );
}

export default App;
