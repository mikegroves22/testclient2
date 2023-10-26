import './App.css';
import Login from './pages/login';

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
