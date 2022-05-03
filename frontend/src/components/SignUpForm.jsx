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
    const [photoUrlOne, setPhotoUrlOne] = useState("");
    const [photoUrlTwo, setPhotoUrlTwo] = useState("");
    const [photoUrlThree, setPhotoUrlThree] = useState("");

    let photoLinkOne;
    let photoLinkTwo;
    let photoLinkThree;

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
      const updloadImgOne = new FormData();
      updloadImgOne.append("file", photoUrlOne);
      updloadImgOne.append("upload_preset", "eqbewyzt");

      await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", updloadImgOne)
      .then((response) => {
        console.log(response.data.secure_url);
        photoLinkOne=response.data.secure_url;
      });

      // Cloud store img two
      const updloadImgTwo = new FormData();
      updloadImgTwo.append("file", photoUrlTwo);
      updloadImgTwo.append("upload_preset", "eqbewyzt");

      await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", updloadImgTwo)
      .then((response) => {
        console.log(response.data.secure_url);
        photoLinkTwo=response.data.secure_url;
      });

      // Cloud store img three
      const updloadImgThree = new FormData();
      updloadImgThree.append("file", photoUrlThree);
      updloadImgThree.append("upload_preset", "eqbewyzt");

      await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", updloadImgThree)
      .then((response) => {
        console.log(response.data.secure_url);
        photoLinkThree=response.data.secure_url;
      });

      storeUser();
    }

    const storeUser = () => {

      const profileApproved = false;
      const identityVerified = false;

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
            photoLinkOne,
            photoLinkTwo,
            photoLinkThree,
            profileApproved,
            identityVerified
        }).then((response) => {
            console.log(response.data);
        });
    }

  return (
    <div>
      <h1>Sign up</h1>
      
      <form onSubmit={createUser}>
        <input type="text" placeholder="Name..." onChange={(event) => setName(event.target.value)} required />

        <input type="text" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />

        <input type="text" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />

        <input type="number" placeholder="Age..." onChange={(event) => setAge(event.target.value)} required />

        <input type="text" placeholder="City..." onChange={(event) => setCity(event.target.value)} required />

        <input type="text" placeholder="Instagram handle..." onChange={(event) => setInstagramHandleV1(event.target.value)} />

        <input type="text" placeholder="Youtube link..." onChange={(event) => setYoutubeLink(event.target.value)} />

        <input type="text" placeholder="Twitter handle..." onChange={(event) => setTwitterHandleV1(event.target.value)} />

        <input type="text" placeholder="Tiktok handle..." onChange={(event) => setTiktokHandleV1(event.target.value)} />

        <input type="text" placeholder="Bio..." onChange={(event) => setBio(event.target.value)} required />

        <input type="file" placeholder="Photo link one..." onChange={(event) => setPhotoUrlOne(event.target.files[0])} />

        <input type="file" placeholder="Photo link two..." onChange={(event) => setPhotoUrlTwo(event.target.files[0])} />

        <input type="file" placeholder="Photo link three..." onChange={(event) => setPhotoUrlThree(event.target.files[0])} />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
