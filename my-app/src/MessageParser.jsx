import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    fetch(`http://127.0.0.1:5000/chatbot/${message}`)
      .then((res) => res.json())
      .then((json) => actions.handleHello(json.response));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
