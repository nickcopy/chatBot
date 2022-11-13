import { createChatBotMessage } from "react-chatbot-kit";

const botName = "상담봇";

const config = {
  initialMessages: [createChatBotMessage(`안뇽! 나는 ${botName}이야`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
