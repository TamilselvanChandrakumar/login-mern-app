import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import "./RegisterForm.css";
const RegisterForm = (props) => {
  let { setUsername, setEmail, setPassword, setCheckPassword, handleSubmit } =
    props.registerState;
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-title">
          <h1>Create a new account</h1>
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              id="username"
              placeholder="enter your username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <div>
              <FaUserLarge className="mail-icon"></FaUserLarge>
            </div>
          </div>
          <div className="form-input">
            <input
              type="email"
              id="resgisteremail"
              placeholder="enter your mail"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div>
              <FaEnvelope className="mail-icon"></FaEnvelope>
            </div>
          </div>
          <div className="form-input">
            <input
              type="password"
              id="registerpassword"
              placeholder="enter your passord"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div>
              <FaLock></FaLock>
            </div>
          </div>
          <div className="form-input">
            <input
              type="password"
              id="registercheckpassword"
              placeholder="verifty passord"
              onChange={(e) => setCheckPassword(e.target.value)}
            ></input>
            <div>
              <FaLock></FaLock>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
