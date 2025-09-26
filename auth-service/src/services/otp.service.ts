import redisClient from '../redis/client';

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
};

export const storeOTP = async (phone: string, otp: string): Promise<void> => {
  await redisClient.setEx(`otp:${phone}`, 300, otp); // expires in 5 min
};

export const verifyOTP = async (phone: string, input: string): Promise<boolean> => {
  const stored = await redisClient.get(`otp:${phone}`);
  return stored === input;
};