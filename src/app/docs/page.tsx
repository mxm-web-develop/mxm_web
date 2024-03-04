import React from 'react'
import Hello from '@/app/content/hello.mdx'

export default function DocsPage(){
  return (
    <article className=' px-24 container prose prose-amber'>
      <Hello />
    </article>
  )
}