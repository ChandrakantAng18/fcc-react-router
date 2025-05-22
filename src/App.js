import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <br />
    </div>
  );
}

export default App;
