import React from "react";
import { useEffect } from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = (message) => {
    const botMessage = createChatBotMessage(message);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
