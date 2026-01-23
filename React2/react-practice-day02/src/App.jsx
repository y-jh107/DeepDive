import "./App.css";
import SubscribeButton from "./components/SubscribeButton";

function App() {
  const channelName = "🧐진혁의 Front-end 파헤치기🧐";

  return (
    <>
      <SubscribeButton channelName={channelName} />
    </>
  );
}

export default App;
