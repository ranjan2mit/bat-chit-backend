import jwt from 'jsonwebtoken';
import { config } from '../config';

export const signJWT = (payload: object): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '7d' });
};
