import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";

function App() {
  const user = {
    name: "양진혁",
    age: 28,
  };

  return (
    <div>
      <h1>My Profile</h1>
      <Profile {...user} />
      <Button />
    </div>
  );
}

export default App;
