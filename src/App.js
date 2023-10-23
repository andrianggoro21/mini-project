// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Event from "./pages/event";
import Waiting from "./pages/transaction/waiting";
import Success from "./pages/transaction/success";
import Attendance from "./pages/eventAttedance";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import CreateEvent from "./pages/createEvent";
import CreateTicket from "./pages/createTicket";
import ListEvent from "./components/listEvent";
import BoxLogin from "./components/formLogin";

import ModalRegister from "./components/modalSignup";
import FormRegister from "./components/formSignup";
import ModalLogin from "./components/modalLogin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/event-form" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
        <Route path="/transaction/waiting" element={<Waiting />} />
        <Route path="/transaction/success" element={<Success />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/testmodal" element={<loginModal/>} />
        <Route element={<FormRegister />} path="/register" />
        <Route element={<ModalRegister />} path="/modal-register" />
        {/* <Route element={<ModalLogin />} path="/modal-login" /> */}
        <Route element={<BoxLogin />} path="/login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
