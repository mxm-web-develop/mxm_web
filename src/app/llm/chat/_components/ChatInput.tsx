'use client'
import { ReactNode } from "react"

interface ChatProps{
 
}

import { Fragment, useState } from 'react'
import {
  FaceFrownIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

import Image from "next/image"



export default function ChatInput() {

  const [data,setData] = useState('')
  const inputOnchange =(e:any)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return (
    <div className="flex w-full items-start space-x-4">
      <div className="flex-shrink-0">
        <Image
          className="inline-block h-10 w-10 rounded-full"
          width={40}
          height={40}
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-700 focus-within:ring-2 focus-within:ring-white">
            <label htmlFor="comment" className="sr-only">
              开始聊天
            </label>
            <textarea
              rows={3}
              onChange={(e)=>inputOnchange(e)}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="开始聊天..."
              value={data}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>

            </div>
            <div className="flex-shrink-0 flex items-center ">
              
              <button
                type="submit"
                className="inline-flex  items-center gap-x-2 rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PaperAirplaneIcon className="w-4"/>
                发送
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}