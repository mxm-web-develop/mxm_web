import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';



export  async function GET(req: Request, res: Response) {
  const { email, password,confirm_password,captcha,phone } = await req.json()

}