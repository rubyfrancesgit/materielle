import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";

// components
import LoginForm from '../components/LoginForm';
import { GlobalContext } from '../context/GlobalContext';

function LoginScreen() {

  const { loginModalClasses, setLoginModalClasses, modalBackgroundClasses, setModalBackgroundClasses } = useContext(GlobalContext);

  // const [loginModalClasses, setLoginModalClasses] = useState("modal hide");
  // const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");

  function launchLoginModal() {
      setModalBackgroundClasses("modal-background");
      setLoginModalClasses("modal");
  } 

  function closeModal() {
      setModalBackgroundClasses("modal-background hide");
      setLoginModalClasses("modal hide");
  }

  return (
    <div className="login-screen">
      <h1 className="login-screen__heading">Materielle</h1>
      <p className="login-screen__light-p">A collection of girls who get it.<br/>Collaborate with local content creators.</p>

      <div className="login-screen__btn-div">
          <button className="login-screen__login-btn" onClick={launchLoginModal}>Login</button>
          <Link to="/sign-up" className="login-screen__register-btn">Register</Link>
      </div>

      <Link className="login-screen__guest-btn" to="/">Continue as guest</Link>

      <div className={loginModalClasses}>
          <LoginForm />
      </div>
      <div className={modalBackgroundClasses} onClick={closeModal}></div>
    </div>
  )
}

export default LoginScreen