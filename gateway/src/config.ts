import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.GATEWAY_PORT || 8000,
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL || '',
  USER_SERVICE_URL: process.env.USER_SERVICE_URL || '',
  CHAT_SERVICE_URL: process.env.CHAT_SERVICE_URL || '',    
};