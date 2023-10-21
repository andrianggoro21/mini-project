
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxLogin from "./components/formLogin";
import BoxRegister from "./pages/signup";
import ModalUser from "./components/modalLogin";
import ModalRegister from "./components/modalSignup";
import FormRegister from "./components/formSignup";



function App() {
  return (
<Routes>
  <Route element={<FormRegister />} path="/register" />
  <Route element={<ModalRegister />} path="/modal-register" />
  <Route element={<ModalUser />} path="/modal-login" />
  <Route element= {<BoxRegister />} path="/signup" />
  <Route element= {<BoxLogin />} path="/login" />
  </Routes>
  )
}

export default App;
