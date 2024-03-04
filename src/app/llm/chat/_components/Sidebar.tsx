'use client'
import { ReactNode } from "react"
import Select from "./Select"

interface ChatProps{
  
}

export default function Sidebar(props:ChatProps){

  return(
    <div className="flex pt-3 flex-col w-full h-full  justify-start">
      <Select />
    </div>
  )
}