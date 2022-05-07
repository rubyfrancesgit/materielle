import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Image } from "cloudinary-react";
import { Link, useNavigate } from 'react-router-dom';

// components
import Nav from '../components/Nav';

// icons
import instagramIcon from "../assets/instagram-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import tiktokIcon from "../assets/tiktok-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import arrowLeft from "../assets/arrow-left.svg";

function UserProfile() {
  const { selectedUser, setUser } = useContext(GlobalContext);

  const [userInstagram, setUserInstagram] = useState("");
  const [userTwitter, setUserTwitter] = useState("");
  const [userTiktok, setUserTiktok] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setUserInstagram("https://www.instagram.com/" + selectedUser.instagramHandle);
    setUserTwitter("https://twitter.com/" + selectedUser.twitterHandle);
    setUserTiktok("https://www.tiktok.com/@" + selectedUser.tiktokHandle);
  }, []);

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <Nav />
      <div className="profile">
        <div className="profile__info-container">
          <Image className="profile__img" cloudName="dum8n0mzw" publicId={selectedUser.profilePictureLink} />

          <div className="profile__info-div">
            <h1 className="profile__heading">Hey I'm {selectedUser.name}</h1>
            <p className="profile__light-p">{selectedUser.bio}</p>

            <div className="profile__btn-div">
              <button className="profile__edit-profile">Edit profile</button>
              <p className="profile__light-p" onClick={logoutUser}>Logout</p>
            </div>
          </div>
        </div>

        <div className="profile__socials">
          <p className="profile__socials-heading">Socials</p>

          <div className="profile__socials-container">
            <a href={userInstagram} target="_blank" className="profile__socials-div">
              <img className="profile__socials-icon" src={instagramIcon} alt="Instagram icon" />
            </a>

            <a href={selectedUser.youtubeLink} target="_blank" className="profile__socials-div">
              <img className="profile__socials-icon" src={youtubeIcon} alt="YouTube icon" />
            </a>
            
            <a href={userTiktok} target="_blank" className="profile__socials-div">
              <img className="profile__socials-icon" src={tiktokIcon} alt="Tiktok icon" />
            </a>
            
            <a href={userTwitter} target="_blank" className="profile__socials-div">
              <img className="profile__socials-icon" src={twitterIcon} alt="Twitter icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
