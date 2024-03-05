import { ReactNode } from "react";
import { NextPage } from 'next';
import Template from "./template";


export default function ChatPage({children}:{children:ReactNode}) {
  return (
    <>
      <Template key={'chat_template'}>{children}</Template>
    </>
  );
};

