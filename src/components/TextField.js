import React, { useContext } from "react";
import { GlobalContext } from "../context/GloabalContext";
import { TextFieldContext } from "../context/TextFieldContext";

const TextField = () => {
  // const [textField, setTextField] = useState("");

  // const [input, setInput] = useState({
  //   content: ""
  // });

  // let handleSubmit = (e) => {
  //   e.preventDefault();

  //   // if (textField.length === 0) return;

  //   console.log(input);

  //   setTextField("");
  //   addThread(input);
  // };

  const { tweets, addThread } = useContext(GlobalContext);
  const { textField, setTextField, input, setInput } = useContext(
    TextFieldContext
  );

  let handleSubmit = (e) => {
    e.preventDefault();

    setTextField("");
    addThread(input);
  };

  return (
    <div className="text-field">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <span style={{ fontWeight: "bold" }}>Character:</span>{" "}
          {textField.length < 9 ? `0${textField.length}` : textField.length}/275
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Thread:</span>{" "}
          {tweets.length < 9 ? `0${tweets.length}` : tweets.length}
        </p>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          value={textField}
          rows="10"
          cols="20"
          placeholder="Type or paste your text here"
          maxLength="275"
          onChange={(e) => setTextField(e.target.value)}
          onChangeCapture={(e) => setInput({ content: e.target.value })}
        />

        <button type="submit" className="button">
          Thread
        </button>
      </form>
    </div>
  );
};

export default TextField;

const button = {
  display: "block",
  width: "100%"
};
