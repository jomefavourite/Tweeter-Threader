import React, { useState, createContext } from "react";

export const TextFieldContext = createContext();

const TextFieldContextProvider = ({ children }) => {
  const [textField, setTextField] = useState("");

  const [input, setInput] = useState({
    content: ""
  });

  return (
    <TextFieldContext.Provider
      value={{
        textField,
        setTextField,
        input,
        setInput
      }}
    >
      {children}
    </TextFieldContext.Provider>
  );
};

export default TextFieldContextProvider;
