import './App.css';
import Login from './pages/login';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/app">
    <Routes>
      <Route path="/" /> {Login}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
