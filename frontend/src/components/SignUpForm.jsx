import React from 'react';
import { useState } from 'react';
import Axios from "axios";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");
    const [instagramHandleV1, setInstagramHandleV1] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [twitterHandleV1, setTwitterHandleV1] = useState("");
    const [tiktokHandleV1, setTiktokHandleV1] = useState("");
    const [bio, setBio] = useState("");
    const [profileUpload, setProfileUpload] = useState("");

    let profilePictureLink;
    let instagramHandle;
    let twitterHandle;
    let tiktokHandle;

    const createUser = async (e) => {
      e.preventDefault();

      // clean social inputs for storing
      instagramHandle = instagramHandleV1.replace('@', '').trim();
      twitterHandle = twitterHandleV1.replace('@', '').trim();
      tiktokHandle = tiktokHandleV1.replace('@', '').trim();

      // check if email is taken
      Axios.post("http://localhost:3001/checkUserEmail", {
        email
      }).then((response) => {
        console.log(response.data);
        if (response.data === "Email already taken") {
          console.log("Try signing in")
        } else {
          photoCloudUpload();
        }
      });
    }

    const photoCloudUpload = async () => {
      // Cloud store img one
      const updloadIProfile = new FormData();
      updloadIProfile.append("file", profileUpload);
      updloadIProfile.append("upload_preset", "eqbewyzt");

      await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", updloadIProfile)
      .then((response) => {
        console.log(response.data.secure_url);
        profilePictureLink = response.data.secure_url;
      });

      storeUser();
    }

    const storeUser = () => {

      const profileApproved = false;
      const identityVerified = false;

      // Register user
      Axios.post("http://localhost:3001/createUser", {
            name,
            email,
            password,
            age,
            city,
            instagramHandle,
            youtubeLink,
            twitterHandle,
            tiktokHandle,
            bio,
            profilePictureLink,
            profileApproved,
            identityVerified
        }).then((response) => {
            console.log(response.data);
        });
    }

  return (
    <div className="signup-form">
      <h1 className="signup-form__heading">Sign up</h1>
      
      <form className="signup-form__form" onSubmit={createUser}>
        <input className="signup-form__input" type="text" placeholder="Name..." onChange={(event) => setName(event.target.value)} required />

        <input className="signup-form__input" type="text" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />

        <input className="signup-form__input" type="password" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />

        <input className="signup-form__input" type="number" placeholder="Age..." onChange={(event) => setAge(event.target.value)} required />

        <input className="signup-form__input" type="text" placeholder="City..." onChange={(event) => setCity(event.target.value)} required />

        <input className="signup-form__input" type="text" placeholder="Instagram handle..." onChange={(event) => setInstagramHandleV1(event.target.value)} />

        <input className="signup-form__input" type="text" placeholder="Youtube link..." onChange={(event) => setYoutubeLink(event.target.value)} />

        <input className="signup-form__input" type="text" placeholder="Twitter handle..." onChange={(event) => setTwitterHandleV1(event.target.value)} />

        <input className="signup-form__input" type="text" placeholder="Tiktok handle..." onChange={(event) => setTiktokHandleV1(event.target.value)} />

        <input className="signup-form__input" type="text" placeholder="Bio..." onChange={(event) => setBio(event.target.value)} required />

        <input type="file" placeholder="Photo link one..." onChange={(event) => setProfileUpload(event.target.files[0])} />

        <button className="signup-form__submit" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
