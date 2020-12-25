import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  let lS = () => {
    const localData = localStorage.getItem("tweets");
    return localData ? JSON.parse(localData) : [];
  };

  const [tweets, setTweets] = useState(lS());

  let addThread = (tweet) => {
    setTweets([...tweets, tweet]);

    console.log(tweets);
  };

  let delTweet = (id) => {
    let filterTweet = tweets.filter((tweet, i) => i !== id);

    setTweets(filterTweet);
  };

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  return (
    <GlobalContext.Provider value={{ tweets, addThread, delTweet }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
