import Home from "./pages/Home";
import Authenticate from "./pages/Authenticate";
import Profile from "./pages/Profile";
import Navbar from "../src/components/Navbar";
import LeftMenu from "../src/components/LeftMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Player from "./pages/Player";

function App() {
  const [hoverMenu, setHoverMenu] = useState(false);
  return (
    <>
      <Router>
        <Navbar hoverMenu={hoverMenu} setHoverMenu={setHoverMenu} />
        <LeftMenu hoverMenu={hoverMenu} />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/auth" element={<Authenticate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
