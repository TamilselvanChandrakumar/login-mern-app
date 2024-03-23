import React from "react";
import BaseLogin from "../baselogin/BaseLogin";
import RegisterForm from "../registerform/RegisterForm";

const Register = () => {
  return (
    <div className="container">
      <div>
        {" "}
        <BaseLogin></BaseLogin>
      </div>

      <div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
