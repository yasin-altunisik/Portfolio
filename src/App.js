import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Projects from "./routes/Projects/Projects";
import Resume from "./routes/Resume/Resume";

function App() {
  return (
    <div id="div_app">
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Profile />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
          <Outlet />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
