import  bcrypt  from 'bcryptjs';
import validator from 'validator'

const saltRounds = 10; // 更改为您想要的加密强度

// 加密密码
export async function encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, saltRounds);
}

// 比较密码和加密后的密码
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// 验证中国手机号码
export function validateChinesePhoneNumber(phoneNumber: string): boolean {
    const pattern = /^1[3456789]\d{9}$/;
    return pattern.test(phoneNumber);
}

// 验证邮箱地址
export function validateEmail(email: string): boolean {
    return validator.isEmail(email);
}