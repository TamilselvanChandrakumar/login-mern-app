import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
// import BaseLogin from "./components/baselogin/BaseLogin";
// import LoginForm from "./components/loginform/LoginForm";
// import RegisterForm from "./components/registerform/RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register></Register>}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
