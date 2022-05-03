import React, { useState, useEffect } from 'react';

function EditProfile(props) {
    const [instagramLink, setInstagramLink] = useState("");

  return (
    <div>
      <form>
          <input type="text" value={props.name} />
          <input type="text" value={props.email} />
          <input type="text" value={props.age} />
          <input type="text" value={props.city} />
          <p>{props.instagram}</p>
          <p>{props.twitter}</p>
          <p>{props.tiktok}</p>
      </form>

        <a href={props.instagram} target="_blank">Insta!</a>
        <a href={props.twitter} target="_blank">Twitter!</a>
        <a href={props.tiktok} target="_blank">Tiktok!</a>
    </div>
  )
}

export default EditProfile
