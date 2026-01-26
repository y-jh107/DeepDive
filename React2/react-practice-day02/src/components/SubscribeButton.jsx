import { useState } from "react";

const SubscribeButton = ({ channelName }) => {
  const [channelInfo, setChannelInfo] = useState({
    isSubscribed: false,
    likes: 850,
  });

  const onClickButton = (e) => {
    const { name } = e.target;

    setChannelInfo((prev) => {
      if (name === "isSubscribed") {
        return {
          ...prev,
          isSubscribed: !prev.isSubscribed,
        };
      }

      if (name === "likes") {
        return {
          ...prev,
          likes: prev.likes + 1,
        };
      } else if (name === "dislikes") {
        return {
          ...prev,
          likes: prev.likes - 1,
        };
      }

      return prev;
    });
  };

  return (
    <div className="channel-info">
      <h1>{channelName}</h1>
      <section>🔥풀스택 개발자를 위해 화이팅🔥</section>
      <section>
        <button
          name="isSubscribed"
          onClick={onClickButton}
          className={channelInfo.isSubscribed ? "subscribed" : "not-subscribed"}
        >
          {channelInfo.isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </section>
      <section className="reactions">
        <h3>좋아요 수: {channelInfo.likes}</h3>
        <button onClick={onClickButton} name="likes">
          👍
        </button>
        <button onClick={onClickButton} name="dislikes">
          👎
        </button>
      </section>
    </div>
  );
};

export default SubscribeButton;
