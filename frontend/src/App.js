import { useState } from 'react';
import { UserContext } from './UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./sass/style.scss";

// Pages
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import LoginScreen from "./pages/LoginScreen";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser}}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ user? <Index /> : <LoginScreen />} />
              <Route path="/login-screen" element={ !user? <LoginScreen /> : <Index />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>


      {/* <Nav/>
      <SignUpForm />
      <LoginForm />
      <DisplayUsers /> */}
    </div>
  );
}

export default App;
