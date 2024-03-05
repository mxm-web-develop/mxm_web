// src/app/api/llm/gemini/route.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: Request,
  res: Response
) {
  const b = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
 
  return Response.json(b.data)
}
