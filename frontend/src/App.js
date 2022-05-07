import { useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./sass/style.scss";

// Pages
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import LoginScreen from "./pages/LoginScreen";
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';

function App() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loginModalClasses, setLoginModalClasses] = useState("modal hide");
  const [modalBackgroundClasses, setModalBackgroundClasses] = useState("modal-background hide");

  return (
    <div className="App">
      <GlobalContext.Provider value={{ user, setUser, selectedUser, setSelectedUser, loginModalClasses, setLoginModalClasses, modalBackgroundClasses, setModalBackgroundClasses}}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Index /> } />
              <Route path="/login-screen" element={ !user ? <LoginScreen /> : <Index /> } />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={ selectedUser ? <Profile /> : <Index /> } />
              <Route path="/user-profile" element={ user ? <UserProfile /> : <Index /> } />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
