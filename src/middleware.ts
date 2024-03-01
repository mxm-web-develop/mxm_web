// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function my_middleware(request: NextRequest) {
  // Your Middleware logic here
  console.log(request,'r1111111')
  return NextResponse.next() // Pass control to the next Middleware or route handler
}