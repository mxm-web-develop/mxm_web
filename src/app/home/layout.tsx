
import { ReactNode } from "react";



export default function HomeLayout(
  {children}:{children:ReactNode}
){
  return(
    <div className=' flex flex-col item-center'>
      <section>banner</section>
      <section>{children}</section>
      <section>footer</section>
    </div>
  )
}