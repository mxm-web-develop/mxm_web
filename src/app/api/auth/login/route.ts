// /pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../../services/auth/jwt'; // 引入我们之前写的 JWT 服务
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/**
 * @swagger
 * /api/hello:
 *   post:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export  async function POST(req: Request, res: Response) {
  // const { email, password } = req.body;
  try{
      const {email,password} = await req.json()
      const user = await prisma.user.findUniqueOrThrow({
      where:{
        email
        }
      })
      const isValid = await bcrypt.compare(password, user.password);
      console.log(isValid)
      if(isValid){
        const token = generateToken(user.id);
        return NextResponse.json(token)
      }else{
        return NextResponse.json({error:"password or user not exist"},{status:400})
      }

  }catch(err){
    console.log(err)
    return NextResponse.json({error:"user not found"},{status:400})
  }
};
