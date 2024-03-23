import React from "react";
import BaseLogin from "../baselogin/BaseLogin";
import LoginForm from "../loginform/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div>
        <BaseLogin></BaseLogin>
      </div>
      <div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
