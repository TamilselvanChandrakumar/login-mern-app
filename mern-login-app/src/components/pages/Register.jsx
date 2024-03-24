import React, { useState } from "react";
import BaseLogin from "../baselogin/BaseLogin";
import RegisterForm from "../registerform/RegisterForm";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      username,
      email,
      password,
      checkPassword,
    };
    console.log(newUser);
  };
  let registerData = {
    setUsername,
    setEmail,
    setPassword,
    setCheckPassword,
    handleSubmit,
  };
  return (
    <div className="container">
      <div>
        {" "}
        <BaseLogin></BaseLogin>
      </div>

      <div>
        <RegisterForm registerState={registerData}></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
