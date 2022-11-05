import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "../src/compo/users/Users";
import Single from "./compo/single/Single";
import "./style/darkmode.css";
import { useSelector } from "react-redux";

function App() {
  const {darkMode} = useSelector((state) => state.dark);
  return (
    <div className={darkMode ? "app darkmode" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":userID" element={<Single />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
