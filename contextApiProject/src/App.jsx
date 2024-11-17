import Login from "./Component/Login";
import Profile from "./Component/Profile.JSX";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h1>Context API App</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;
