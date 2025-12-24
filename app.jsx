import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import { useTasks } from "./store/taskContext";

export default function App() {
  const { darkMode } = useTasks();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
