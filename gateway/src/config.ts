import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.GATEWAY_PORT || 8000,
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
};