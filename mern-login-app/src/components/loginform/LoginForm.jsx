import React from "react";
import "./LoginForm.css";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <div className="login-title">
            <h1>Sign into your account</h1>
          </div>
          <form method="POST">
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
            <button>submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
