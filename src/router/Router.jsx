import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Routers>
  );
}

export default Router;
