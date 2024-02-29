import React, { ReactNode } from 'react'

export default function LlmLayoutPage({children}:{children:ReactNode}){
  return (
    <div className='flex items-start h-full'>
      <div className=' flex-grow min-w-[560px]'>chatbox</div>
      <div className='w-[280px] bg-slate-900 h-full'>sidebar</div>
    </div>
  )
}