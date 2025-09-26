import dotenv from 'dotenv';
dotenv.config();

export const config = {
  AUTH_SERVICE_PORT: process.env.AUTH_SERVICE_PORT || 5001,
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  jwtSecret: process.env.JWT_SECRET || 'secret',
};
