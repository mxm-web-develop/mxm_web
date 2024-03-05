import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'
import Redis from 'ioredis';

const redis = new Redis(); // 你可能需要根据你的Redis配置提供参数

const genAI = new GoogleGenerativeAI('AIzaSyBW6663KQQxmFNcEKOfnzoYXimQLA6yqWE');
const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};
export  async function POST(req: Request, res: NextApiResponse) {
  const { message } = await req.json(); // 从请求体中获取消息

  const userIp = req.headers.get('x-forwarded-for')
  
  

  // 从Redis中获取用户的聊天历史
  const historyJson = await redis.get(`${userIp}`);
  const userChatHistory = historyJson ? JSON.parse(historyJson) : [];
   console.log("userChatHistory",userChatHistory)
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: userChatHistory,
    generationConfig: {
      maxOutputTokens: 2000,
    },
  });

  const result = await chat.sendMessage(message);
  const response = await result.response;
  const text = response.text();

  // 更新用户的聊天历史
  userChatHistory.push({ role: "user", parts: message });
  userChatHistory.push({ role: "model", parts: text });
  console.log(userIp)
  // 将新的聊天历史保存到Redis
  await redis.set(`${userIp}`, JSON.stringify(userChatHistory), 'EX', 86400); // 设置24小时的过期时间

  // 返回响应
  return Response.json({data: text},{status:200}) 
}