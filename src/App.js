// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
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
import Auth from "./components/auth";
import NavbarUser from "./components/navbarUser";

import Transaction from "./pages/transaction";
import NewSuccess from "./pages/success";
import { useSelector, useDispatch } from "react-redux";
import UploadProfile from "./components/profilePicture/uploadImage";
import Profile from "./pages/profile";
import DashboardUser from "./pages/profile";



function App() {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  // console.log(user);
  return (
    <>
      {user.roleId == 1 ? (
        <Box>
          <ScrollToTop />
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/event-form" element={<CreateEvent />} />
          <Route path="/dashboard/ticket-form" element={<CreateTicket />} /> */}
              <Route path="/event" element={<Event />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/transaction/waiting" element={<Waiting />} />
              <Route path="/transaction/success" element={<Success />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/success" element={<NewSuccess />} />
              <Route exact path="/modal-register" element={<ModalRegister />} />
              {/* <Route element={<ModalLogin />} path="/modal-login" /> */}
              {/* <Route path="/login" element={<Navbar role="users" />} /> */}
              <Route exact path="/login" element={<BoxLogin />} />
              <Route exact path="/register" element={<FormRegister />} />
              <Route path="/profile" element={<DashboardUser />} />
            </Routes>
          </Auth>
        </Box>
      ) : (
        <Box>
          <ScrollToTop />
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/event-form" element={<CreateEvent />} />
              <Route path="/dashboard/ticket-form" element={<CreateTicket />} />
              <Route path="/event" element={<Event />} />
              {/* <Route path="/transaction" element={<Transaction />} />
          <Route path="/transaction/waiting" element={<Waiting />} />
          <Route path="/transaction/success" element={<Success />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/success" element={<NewSuccess />} /> */}
              <Route exact path="/modal-register" element={<ModalRegister />} />
              {/* <Route element={<ModalLogin />} path="/modal-login" /> */}
              {/* <Route path="/login" element={<Navbar role="users" />} /> */}
              <Route exact path="/login" element={<BoxLogin />} />
              <Route exact path="/register" element={<FormRegister />} />
              <Route path="/profile" element={<DashboardUser />} />
            </Routes>
          </Auth>
        </Box>
      )}
      {/* <ScrollToTop />
      <Auth>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/event-form" element={<CreateEvent />} />
          <Route path="/dashboard/ticket-form" element={<CreateTicket />} />
          <Route path="/event" element={<Event />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/transaction/waiting" element={<Waiting />} />
          <Route path="/transaction/success" element={<Success />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/success" element={<NewSuccess />} />
          <Route exact path="/modal-register" element={<ModalRegister />} />
          <Route element={<ModalLogin />} path="/modal-login" /> 
          <Route path="/login" element={<Navbar role="users" />} />
          <Route exact path="/login" element={<BoxLogin />} />
          <Route exact path="/register" element={<FormRegister />} />
        </Routes>
      </Auth> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
