import { ReactNode } from "react"
import Chatbox from "./_components/Chatbox"
import Sidebar from './_components/Sidebar';

interface ChatProps{
  children:ReactNode
}

export default function Template(props:ChatProps){
  const {children} = props
  return(
    <div className="flex w-full h-full items-center justify-start">
      <div className="flex-grow h-full">
        <Chatbox />
      </div>
      <div className=" w-[300px] pr-8 h-full"> 
        <Sidebar />
      </div>
    </div>
  )
}