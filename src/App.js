
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoxLogin from "./components/formLogin";
import BoxRegister from "./components/formSignup";


function App() {
  return (
<Routes>
  <Route element= {<BoxRegister />} path="/signup" />
  <Route element= {<BoxLogin />} path="/login" />
  </Routes>
  )
}

export default App;
