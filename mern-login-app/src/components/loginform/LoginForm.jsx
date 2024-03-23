import React from "react";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <div className="login-title">
            <h1>Sign into your account</h1>
          </div>
          <form method="POST">
            <div>
              <input
                type="email"
                id="email"
                placeholder="enter your mail"
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="enter your passord"
              ></input>
            </div>
            <button>submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
