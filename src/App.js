import "./App.css";
import Homepage from "../src/Pages/Homepage/Homepage";
import Profile from "./Pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
