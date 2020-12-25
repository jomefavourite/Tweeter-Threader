import React, { useState } from "react";
import Thread from "./components/Thread";
import TextField from "./components/TextField";
// import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const [tweets, setTweets] = useState([]);

  let addThread = (tweet) => {
    setTweets([...tweets, tweet]);

    console.log(tweets);
  };

  let delTweet = (id) => {
    let filterTweet = tweets.filter((tweet, i) => i !== id);

    setTweets(filterTweet);
  };

  return (
    <div className="App">
      <TextField addThread={addThread} tweets={tweets} />
      <Thread tweets={tweets} delTweet={delTweet} />
    </div>
  );
}
