import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import CreateEvent from "./pages/createEvent";
import CreateTicket from "./pages/createTicket";
import { Route, Routes } from "react-router-dom";
import ListEvent from "./components/listEvent";
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
        <Route path="/dashboard/event-form" element={<CreateEvent/>}/>
        <Route path="/dashboard/ticket-form" element={<CreateTicket/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
