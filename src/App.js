import './App.css';
import Login from './pages/login';
import { HashRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/app">
    <Routes>
      <Route path="/testclient2" /> {Login}
    </Routes>
  </HashRouter>
  );
}

export default App;
