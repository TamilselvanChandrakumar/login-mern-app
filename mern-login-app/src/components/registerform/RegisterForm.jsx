import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import "./RegisterForm.css";
const RegisterForm = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-title">
          <h1>Create a new account</h1>
        </div>
        <form method="POST">
          <div className="form-input">
            <input
              type="text"
              id="username"
              placeholder="enter your username"
            ></input>
            <div>
              <FaUserLarge className="mail-icon"></FaUserLarge>
            </div>
          </div>
          <div className="form-input">
            <input
              type="email"
              id="email"
              placeholder="enter your mail"
            ></input>
            <div>
              <FaEnvelope className="mail-icon"></FaEnvelope>
            </div>
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password"
              placeholder="enter your passord"
            ></input>
            <div>
              <FaLock></FaLock>
            </div>
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password"
              placeholder="verifty passord"
            ></input>
            <div>
              <FaLock></FaLock>
            </div>
          </div>
          <button>submit</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
