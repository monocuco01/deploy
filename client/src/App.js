import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Home from "./components/Home/Home";
import Form from "./components/form/Form";
import Detail from "./components/detail/detail";
import axios from "axios";
axios.defaults.baseURL = "https://deploy-production-2269.up.railway.app/";
function App() {
  return (
    <Routes>
      <Route path="/create" element={<Form />}></Route>
      <Route exact path={"/"} element={<Landing />}></Route>
      <Route exact path={"/home"} element={<Home />}></Route>
      <Route exact path={"/detail/:id"} element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
