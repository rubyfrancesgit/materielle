import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Image } from "cloudinary-react";
import Nav from '../components/Nav';

function Index() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers")
          .then((response) => {
            setListOfUsers(response.data);
          });
    }, []);

  return (
    <div>
      <Nav />
      <div className="users-display">
        <h1 className="users-display__heading">Materielle girls</h1>
        {listOfUsers.map((user) => {
          return(
             <div className="users-display__user-div" key={user._id}>
                <Image className="users-display__img" cloudName="dum8n0mzw" publicId={user.photoLinkOne} />
               <p className="users-display__name">{user.name}</p>
               <p  className="users-display__city">{user.city}</p>
             </div>
            );
        })}
      </div>
    </div>
  )
}

export default Index
