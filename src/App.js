import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Construccion from "./components/Construccion";
import Inmobiliario from "./components/Inmobiliario";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="main" element={<Main />} />
          <Route path="construccion" element={<Construccion />} />
          <Route path="inmobiliario" element={<Inmobiliario />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
