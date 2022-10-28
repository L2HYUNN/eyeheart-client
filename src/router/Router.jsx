/* eslint-disable import/no-cycle */
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import Analysis from '../pages/Analysis';
import ChatDetail from '../pages/ChatDetail';
import CheckReservation from '../pages/CheckReservation';
import Child from '../pages/Child';
import Consulting from '../pages/Consulting';
import Doctor from '../pages/Doctor';
import Home from '../pages/Home';
import Join from '../pages/Join';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Reserve from '../pages/Reserve';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/child" element={<Child />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/chat" element={<ChatDetail />} />
        <Route path="/reservation" element={<CheckReservation />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/consulting/:id" element={<Doctor />} />
        <Route path="/consulting/:id/reserve" element={<Reserve />} />
      </Routes>
    </Routers>
  );
}

export default Router;
