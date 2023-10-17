
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxLogin from "./components/formLogin";
import BoxRegister from "./components/formSignup";
import ModalUser from "./components/modalLogin";


function App() {
  return (
<Routes>
  <Route element={<ModalUser />} path="/modal" />
  <Route element= {<BoxRegister />} path="/signup" />
  <Route element= {<BoxLogin />} path="/login" />
  </Routes>
  )
}

export default App;
