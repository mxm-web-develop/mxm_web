import Link from 'next/link'
import React, { ReactNode } from 'react'

const LLMRoutes =[
  {
    link:'/llm/chat',
    text:"聊天机器"
  },
  {
    link:'/llm/models',
    text:"微调训练"
  },
  {
    link:'llm/files',
    text:"训练文档"
  }
]

export default function LlmLayoutPage({children}:{children:ReactNode}){
  return (
 
      <div className='flex flex-col items-start h-full'>
        <div className=' w-full h-14 gap-x-8 flex items-center justify-center'>
            {
              LLMRoutes.map(i=>(
                <Link href={i.link} key={i.link} className=' hover:text-sky-500 active:text-sky-500'>
                    {i.text}
                </Link>
              ))
            }
        </div>
        <div className='w-full bg-slate-900 h-[calc(100%-54px)]'>
          {children}
        </div>
      </div>
  
  )
}