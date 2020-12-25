import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
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
    <GlobalContext.Provider value={{ ...tweets }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
