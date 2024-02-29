import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyBW6663KQQxmFNcEKOfnzoYXimQLA6yqWE');
const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};
export  async function POST(req: Request, res: NextApiResponse) {
  // const { email, password,confirm_password,captcha,phone } = await req.json()
  //AIzaSyBW6663KQQxmFNcEKOfnzoYXimQLA6yqWE

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "Hello, I have 2 dogs in my house.",
      },
      {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
      },
    ],
    generationConfig: {
      maxOutputTokens: 2000,
    },
  });
  const msg = "How many paws are in my house?";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return Response.json({
    data:text
  }) 
}