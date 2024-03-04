import { ReactNode } from "react"
import Template from "./template"

interface ChatProps{
  children:ReactNode
}

export default function ChatPage(props:ChatProps){
  const {children} = props
  return(
    <>
      <Template key={'chat_template'}>{children}</Template>
    </>
  )
}