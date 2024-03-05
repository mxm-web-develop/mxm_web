"use client";
import { ReactNode, useMemo } from "react";

interface ChatProps {

}
import { Fragment, useState } from "react";

import ChatInput from "./ChatInput";
import ScrollView from "@/components/Scrollview";
import axios from "axios";

export default function Chatbox(props: ChatProps) {

  const [loading,setLoading] = useState(false)
  const [response,setReponse] = useState<{
  data:string
  status:number
  error:null | number|string
}>()
  const handleDataSubmit = async (data:string)=>{
    setLoading(true)
    const res =  await axios.post('http://64.176.53.43:3000/api/llm/gemini',{message:data})
    console.log(res)
    if(res&&res.status == 200){
      setReponse({
        data:res?.data?.message,
        status:res.status,
        error:null
      })
    }else{
      setReponse({
        data:'',
        status:res.status,
        error:'error on response'
      })
    }
    setLoading(false)
  }

  return (
    <div className=" relative w-full px-8 h-full">
      <div className="w-full my-3 border border-solid border-gray-700 rounded-sm p-5">
        <ScrollView newData={response}>你好</ScrollView>
      </div>
      <div className=" absolute bottom-10 left-0 px-8  mx-auto w-[100%]">
        <ChatInput loading={loading} onDataSubmit={(d)=>handleDataSubmit(d)} />
      </div>
    </div>
  );
}
