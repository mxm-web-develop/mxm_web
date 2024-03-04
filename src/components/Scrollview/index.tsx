'use client'
import React, { ReactNode, useEffect, useMemo, useRef } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useSize } from 'ahooks';
interface ScrollviewType {
  children?:ReactNode
  height?:string
}
const ScrollView = (props:ScrollviewType) => {
  const { children, height="300px"} = props
  const scrollRef: any = useRef(null)
  const scrollRoot:any = useRef(null)
  const size = useSize(document.querySelector('body'));
  const ScrollHeight = useMemo(()=>{
      if(size&&size.height){
        return size?.height - 340
      }
      return 480
  },[size])
 
  return(
    <ScrollArea.Root
      ref={scrollRoot}
      className={`rounded overflow-hidden w-full`}
      scrollHideDelay={300}
      style={{
        height:ScrollHeight,
        boxSizing: 'border-box'
      }}
      >
      <ScrollArea.Viewport
        ref={scrollRef}
        className="w-full h-full rounded"
        // onScroll={handleScroll}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5
         bg-slate-500/10 transition-colors duration-[260ms]
          ease-out hover:bg-slate-500/30 data-[orientation=vertical]:w-2.5 
          data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb
          className="flex-1 bg-slate-500 rounded-[10px] 
        relative before:content-[''] before:absolute before:top-1/2 
        before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
        before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-slate-100
         transition-colors duration-[260ms] ease-out hover:bg-slate-200
          data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col 
          data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollArea.Thumb
          className="flex-1 bg-slate-400 rounded-[10px]
         relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 
         before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full
          before:min-w-[44px] before:min-h-[44px]"
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className=" bg-slate-800" />
    </ScrollArea.Root>
  )
};

export default ScrollView;