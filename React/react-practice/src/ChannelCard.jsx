import { useState } from "react";

function ChannelCard(props) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSubscription = (prev) => {
    setIsSubscribed((prev) => !prev);
  };

  const buttonStyle = {
    backgroundColor: isSubscribed ? "#ccc" : "red",
  };

  return (
    <>
      <h1>Are you subscribed?</h1>
      <div className="userName">{props.name}</div>
      <button onClick={toggleSubscription} style={buttonStyle}>
        {isSubscribed ? "구독중" : "구독"}
      </button>
    </>
  );
}

export default ChannelCard;
