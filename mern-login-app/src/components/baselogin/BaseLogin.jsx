import React from "react";
import "./BaseLogin.css";
import { useLocation, useNavigate } from "react-router-dom";
const BaseLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };

  let defaultclass = "btn-style ";
  let active = " active-btn";

  return (
    <div className="baselogin-container">
      <a href="#">Logo</a>
      <div className="baselogin-btn">
        <button
          onClick={login}
          className={location.pathname === "/login" ? active : defaultclass}
        >
          LOGIN
        </button>
        <button
          onClick={register}
          className={location.pathname === "/register" ? active : defaultclass}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default BaseLogin;
