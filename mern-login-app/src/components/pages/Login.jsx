import React, { useState } from "react";
import BaseLogin from "../baselogin/BaseLogin";
import LoginForm from "../loginform/LoginForm";
import { useDispatch, useStore } from "react-redux";
import { register_success } from "../../slices/loginslice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const store = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();

    let userCredential = {
      email,
      password,
    };
    console.log(userCredential);
    dispatch(register_success());
    console.log(store.getState());
  };
  return (
    <div className="container">
      <div>
        <BaseLogin></BaseLogin>
      </div>
      <div>
        <LoginForm
          loginState={{ setEmail, setPassword, handleSubmit }}
        ></LoginForm>
      </div>
    </div>
  );
};

export default Login;
