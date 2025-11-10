import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Skills from "./Page/Skills";
import Project from "./Page/Project";
import Contact from "./Page/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
