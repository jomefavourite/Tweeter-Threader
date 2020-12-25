import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";

const Thread = () => {
  const { tweets, delTweet } = useContext(GlobalContext);

  let handleClick = (id) => {
    delTweet(id);
  };

  let display = tweets.length ? (
    tweets.map((tweet, i) => {
      return (
        <div key={i + 1} className="tweet">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <label>{i + 1}</label>
            <p
              style={{ cursor: "pointer" }}
              className="cross"
              onClick={() => handleClick(i)}
            >
              X
            </p>
          </div>
          <p className="text" style={{ marginTop: "5px" }}>
            {tweet.content}
          </p>
          {console.log(tweet.content)}
        </div>
      );
    })
  ) : (
    <div className="tweet">
      <p>
        <span role="img" aria-label="emoji">
          ✨
        </span>
      </p>
      <p>
        Your threads will be here.{" "}
        <span role="img" aria-label="emoji">
          🔥
        </span>
      </p>

      <p>
        <span role="img" aria-label="emoji">
          ℹ
        </span>{" "}
        The character limit for each tweet is 275.
      </p>
    </div>
  );

  return <div className="display">{display}</div>;
};

export default Thread;
