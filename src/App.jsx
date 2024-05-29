import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Tipografia from "./pages/Tipografia.jsx";
import SintesisVisual from "./pages/SintesisVisual.jsx";
import Dibujo from "./pages/Dibujo.jsx";
import ZCubed from "./pages/ZCubed.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/tipografia" element={<Tipografia />} />
        <Route path="/sintesis-visual" element={<SintesisVisual />} />
        <Route path="/dibujo" element={<Dibujo />} />
        <Route path="/zcubed" element={<ZCubed />} />
      </Routes>
    </Router>
  );
}

export default App;
