import React, { useState, useEffect } from 'react';

function EditProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <form>
          <input type="text" value={user.name} />
          <input type="text" value={user.bio} />
          <input type="text" value={user.city} />
          <p>{user.instagram}</p>
          <p>{user.twitter}</p>
          <p>{user.tiktok}</p>
      </form>

        <a href={user.instagram} target="_blank">Insta!</a>
        <a href={user.twitter} target="_blank">Twitter!</a>
        <a href={user.tiktok} target="_blank">Tiktok!</a>
    </div>
  )
}

export default EditProfile
