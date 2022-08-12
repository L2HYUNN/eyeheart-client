import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ChatDetail from "../pages/ChatDetail";
import CheckReservation from "../pages/CheckReservation";
import Consulting from "../pages/Consulting";
import Doctor from "../pages/Doctor";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Reserve from "../pages/Reserve";

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/:id/reserve" element={<CheckReservation />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/consulting/:id" element={<Doctor />} />
        <Route path="/consulting/:id/reserve" element={<Reserve />} />
      </Routes>
    </Routers>
  );
}

export default Router;
