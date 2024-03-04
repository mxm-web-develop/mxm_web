"use client";
import { ReactNode, useMemo } from "react";

interface ChatProps {}

import { Fragment, useState } from "react";
import { PaperAirplaneIcon, PaperClipIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import ChatInput from "./ChatInput";
import ScrollView from "@/components/Scrollview";

export default function Chatbox(props: ChatProps) {
  return (
    <div className=" relative w-full px-8 h-full">
      <div className="w-full my-3 border border-solid border-gray-700 rounded-sm p-5">
        <ScrollView>你好</ScrollView>
      </div>
      <div className=" absolute bottom-10 left-0 px-8  mx-auto w-[100%]">
        <ChatInput />
      </div>
    </div>
  );
}
