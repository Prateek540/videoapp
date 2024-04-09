import Home from "./pages/Home";
import Authenticate from "./pages/Authenticate";
import Profile from "./pages/Profile";
import Navbar from "../src/components/Navbar";
import LeftMenu from "../src/components/LeftMenu";
import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
import Player from "./pages/Player";
import { UserContext } from "./UserContext";
import Upload from "./pages/Upload";

function App() {
  const [hoverMenu, setHoverMenu] = useState(false);
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <Navbar hoverMenu={hoverMenu} setHoverMenu={setHoverMenu} />
      <LeftMenu hoverMenu={hoverMenu} />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/auth"
          element={userInfo ? <Profile /> : <Authenticate />}
        />
        <Route
          path="/upload"
          element={userInfo ? <Upload /> : <Authenticate />}
        />
        <Route
          path="/profile/:username"
          element={userInfo ? <Profile /> : <Authenticate />}
        />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
