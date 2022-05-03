import React, { useState } from 'react';
import Axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();

        console.log(email, password);

        Axios.post("http://localhost:3001/loginUser", {
            email,
            password
        }).then((response) => {
            console.log(response);

            if (response.data === "User not found. Please register") {
                console.log('NOT logged in');
            } else if (response.data === "Wrong password") {
                console.log('NOT logged in');
            } else {
                console.log("logged in");
                
                // storing logged-in user's details
                sessionStorage.setItem("userID", response.data._id);
                sessionStorage.setItem('userName', response.data.name);
                sessionStorage.setItem('userEmail', response.data.email);
            }
        });
    }

    const logoutUser = () => {
        console.log("logged out");
        sessionStorage.clear();
    }

  return (
    <div>
      <form onSubmit={loginUser}>
        <h1>Login</h1>

        <input type="text" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />

        <input type="text" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />

        <button type="submit">Login</button>
      </form>

      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default LoginForm;