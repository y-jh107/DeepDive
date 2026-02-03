import "./App.css";
import { PostProvider } from "./context/PostContext";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Header />
        <Editor />
        <List />
      </PostProvider>
    </div>
  );
}

export default App;
