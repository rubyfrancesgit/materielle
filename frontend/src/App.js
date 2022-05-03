import DisplayUsers from "./components/DisplayUsers";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SignUpForm />
      <LoginForm />
      <DisplayUsers />
    </div>
  );
}

export default App;
