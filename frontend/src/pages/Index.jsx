import React, { useContext, useState, useEffect } from 'react';
import Axios from "axios";
import { Image } from "cloudinary-react";
import Nav from '../components/Nav';
import Profile from './Profile';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../context/GlobalContext';

function Index() {
  const { selectedUser, setSelectedUser } = useContext(GlobalContext);

  const [usersDisplayClasses, setUsersDisplayClasses] = useState("users-display");
  const [profileDivClasses, setProfileDivClasses] = useState("hide");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
      Axios.get("http://localhost:3001/getUsers")
        .then((response) => {
          setListOfUsers(response.data);
        });
  }, []);

  return (
    <div>
      <Nav />
      <div className={usersDisplayClasses}>
        <h1 className="users-display__heading">Materielle girls</h1>
        <div className="users-display__container">
          {listOfUsers.map((user) => {
            return(
              <div className="users-display__user-div" onClick={() => {setSelectedUser(user); navigate("/profile")}} key={user._id}>
                  <Image className="users-display__img" cloudName="dum8n0mzw" publicId={user.profilePictureLink} />
                <p className="users-display__name">{user.name}</p>
                <p  className="users-display__city">{user.city}</p>
              </div>
              );
          })}
        </div>
      </div>

      {selectedUserId && <div className={profileDivClasses}><Profile  userId={selectedUserId}/></div>}
    </div>
  )
}

export default Index
