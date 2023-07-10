import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Construccion from "./pages/Construccion";
import Inmobiliario from "./pages/Inmobiliario";
import NoPage from "./pages/NoPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="construccion" element={<Construccion />} />
        <Route path="inmobiliario" element={<Inmobiliario />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
