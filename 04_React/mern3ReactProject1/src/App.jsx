import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Test from "./pages/Test";
import "./App.css";
import UseState from "./Hooks/UseState";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/test" element={<Test />} />
        <Route path="/useState" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
