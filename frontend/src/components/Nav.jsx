import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import LoginForm from '../components/LoginForm';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const { user, setSelectedUser, loginModalClasses, setLoginModalClasses, modalBackgroundClasses, setModalBackgroundClasses } = useContext(GlobalContext);

  let navigate = useNavigate();

  function launchLoginModal() {
      setModalBackgroundClasses("modal-background");
      setLoginModalClasses("modal");
  } 

  function closeModal() {
      setModalBackgroundClasses("modal-background hide");
      setLoginModalClasses("modal hide");
  }

  return (
    <div className="nav">
      <Link to="/" className="nav__heading">Materielle</Link>

      {user && 
      <div className="nav__user-div" onClick={() => {setSelectedUser(user); navigate("/user-profile")}}>
        <img className="nav__profile-img" src={user.profilePictureLink} alt="Your profile picture" />

        <p className="nav__p">{user.name}</p>
      </div>}

      {!user && 
      <div className="login-screen__btn-div">
          <button className="login-screen__login-btn" onClick={launchLoginModal}>Login</button>
          <Link to="/sign-up" className="login-screen__register-btn">Register</Link>
      </div>}

      <div className={loginModalClasses}>
          <LoginForm />
      </div>
      <div className={modalBackgroundClasses} onClick={closeModal}></div>
    </div>
  )
}

export default Nav
