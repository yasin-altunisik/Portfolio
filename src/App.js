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
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-lg-3 mx-auto">
              <Profile />
            </div>
            <div class="col-sm-12 col-lg-9">
              <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
          <Outlet />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
