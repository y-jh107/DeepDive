import { useState } from "react";

const Button = () => {
  const [isOnline, setIsOnline] = useState(false);

  const handleClick = () => {
    setIsOnline(!isOnline);
    console.log("Hello!");
  };

  return (
    <div>
      <p>{isOnline ? "Online" : "Offline"}</p>
      <button onClick={handleClick}>Say Hello</button>
    </div>
  );
};

export default Button;
