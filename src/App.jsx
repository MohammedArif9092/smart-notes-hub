import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;


