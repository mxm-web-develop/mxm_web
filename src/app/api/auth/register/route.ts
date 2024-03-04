import { PrismaClient } from "@prisma/client";
import { validateChinesePhoneNumber, validateEmail } from "@/uitls";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { email, phone, password, confirm_password, code } = await req.json();
  // 检查必要的字段是否已提供
  if (!phone || !password || !confirm_password) {
    return NextResponse.json(
      { code: 400, error: "Missing fields", data: null },
      { status: 400 }
    );
  }
  if(!validateChinesePhoneNumber(phone)){
    return NextResponse.json(
      { code: 400, error: "Wrrong Phone Number Form", data: null },
      { status: 400 }
    );
  }
  if(email&&!validateEmail(email)){
    return NextResponse.json(
      { code: 400, error: "unvalidate Email Form", data: null },
      { status: 400 }
    );
  }
  // 检查密码是否与确认密码相符
  if (password !== confirm_password) {
    return NextResponse.json(
      { code: 400, error: "Password confirmation failed", data: null },
      { status: 400 }
    );
  }

  // 检查用户是否已存在
  const isUser = await prisma.user.findUnique({
    where: { phone: phone },
  });

  if (isUser) {
    return NextResponse.json(
      { code: 400, error: "User already exists", data: null },
      { status: 400 }
    );
}

  // 创建新用户
  const newUser = await prisma.user.create({
    data: {
      phone: phone,
      password, // 确保这里加密密码，例如使用 bcrypt
      email: email || null, // 处理可选的电子邮件字段
    },
  });

  // 返回成功响应
  return NextResponse.json(
    { code: 201, error: null, data: newUser },
    { status: 201 }
  );
}
