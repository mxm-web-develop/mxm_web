import { ReactNode } from "react";
import { NextPage } from 'next';
import Template from "./template";

interface ChatProps {
  children: ReactNode;
}

const ChatPage: NextPage<ChatProps> = ({ children }) => {
  return (
    <>
      <Template key={'chat_template'}>{children}</Template>
    </>
  );
};

export default ChatPage;