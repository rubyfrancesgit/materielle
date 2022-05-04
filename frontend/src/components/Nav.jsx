import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

function Nav() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="nav">
      <h1 className="nav__heading">Materielle</h1>

      <div className="nav__user-div">
        <img className="nav__profile-img" src={user.photoLinkOne} alt="Your profile picture" />
      </div>
    </div>
  )
}

export default Nav
