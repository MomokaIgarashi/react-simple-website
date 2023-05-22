import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Calc from "./components/Calc";
import Contact from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/calc" className="nav-item">Calc</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/calc" element={<Calc />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;