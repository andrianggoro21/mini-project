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
import ScrollToTop from "./components/scrollToTop";
import SearchPage from "./pages/search";

function App() {
  return (
    <>
<ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/event-form" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
        <Route path="/transaction/waiting" element={<Waiting />} />
        <Route path="/transaction/success" element={<Success />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route element={<FormRegister />} path="/register" />
        <Route element={<ModalRegister />} path="/modal-register" />
        {/* <Route element={<ModalLogin />} path="/modal-login" /> */}
        {/* <Route path="/login" element={<Navbar role="users" />} /> */}
        <Route element={<BoxLogin />} path="/login" />
        <Route path="/dashboard/event-form" element={<CreateEvent />} />
        <Route path="/dashboard/ticket-form" element={<CreateTicket />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
