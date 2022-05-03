import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Image } from "cloudinary-react";
import EditProfile from './EditProfile';

function DisplayUsers() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [thisId, setThisId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userInstagram, setUserInstagram] = useState("");
  const [userTwitter, setUserTwitter] = useState("");
  const [userTiktok, setUserTiktok] = useState("");

  useEffect(() => {
      Axios.get("http://localhost:3001/getUsers")
        .then((response) => {
          setListOfUsers(response.data);
        });
  }, []);

  const launchEditProfileModal = (e) => {
    console.log(e.target.value);
    setThisId(e.target.value);
    const id = e.target.value;
    const thisUser = listOfUsers.filter(x => x._id === id);
    console.log(thisUser[0].name);
    setUserName(thisUser[0].name);
    setUserEmail(thisUser[0].email);
    setUserAge(thisUser[0].age);
    setUserCity(thisUser[0].city);
    setUserInstagram("https://www.instagram.com/" + thisUser[0].instagramHandle);
    setUserTwitter("https://twitter.com/" + thisUser[0].twitterHandle);
    setUserTiktok("https://www.tiktok.com/@" + thisUser[0].tiktokHandle);
    console.log(thisUser[0].tiktokHandle);
  }

  return (
    <div>
      <EditProfile name={userName} email={userEmail} age={userAge} city={userCity} instagram={userInstagram} twitter={userTwitter} tiktok={userTiktok} />
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return(
             <div key={user._id}>
                <Image cloudName="dum8n0mzw" publicId={user.photoLinkOne} />
               <h1>Name: {user.name}</h1>
               <p>Age: {user.age}</p>
               <p>Bio: {user.bio}</p>
               <button value={user._id} onClick={launchEditProfileModal}>Edit profile</button>
             </div>
            );
        })}
      </div>
    </div>
  )
}

export default DisplayUsers
