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
