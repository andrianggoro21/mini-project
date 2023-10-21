import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import CreateEvent from "./pages/createEvent";
import CreateTicket from "./pages/createTicket";
import { Route, Routes } from "react-router-dom";
import ListEvent from "./components/listEvent";
// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Event from "./pages/event";
import Waiting from "./pages/transaction/waiting";
import Success from "./pages/transaction/success";
import Attedance from "./pages/eventAttedance";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/event-form" element={<CreateEvent/>}/>
      </Routes>
      <Footer />
      <Routes>
        <Route path="/event" element={<Event/>}/>
        <Route path="/transaction/waiting" element={<Waiting/>}/>
        <Route path="/transaction/success" element={<Success/>}/>
        <Route path="/attedance" element={<Attedance/>}/>
      </Routes>
    </>
  );
}

export default App;
