import React from "react";
import Thread from "./components/Thread";
import TextField from "./components/TextField";
// import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import GlobalContextProvider from "./context/GloabalContext";
import TextFieldContextProvider from "./context/TextFieldContext";

export default function App() {
  // const [tweets, setTweets] = useState([]);

  // let addThread = (tweet) => {
  //   setTweets([...tweets, tweet]);

  //   console.log(tweets);
  // };

  // let delTweet = (id) => {
  //   let filterTweet = tweets.filter((tweet, i) => i !== id);

  //   setTweets(filterTweet);
  // };

  return (
    <div className="App">
      <GlobalContextProvider>
        <TextFieldContextProvider>
          <TextField />
          <Thread />
        </TextFieldContextProvider>
        {/* <TextField addThread={addThread} tweets={tweets} /> */}
        {/* <Thread tweets={tweets} delTweet={delTweet} /> */}
      </GlobalContextProvider>
    </div>
  );
}
