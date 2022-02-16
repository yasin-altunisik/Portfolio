import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div id="div_app">
      <Navbar />
      <div className="flex">
        <Profile />
        <Home />
      </div>
    </div>
  );
}

export default App;
