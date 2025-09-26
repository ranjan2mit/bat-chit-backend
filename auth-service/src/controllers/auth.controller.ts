import { Request, Response } from 'express';
import { generateOTP, storeOTP, verifyOTP } from '../services/otp.service';
import { signJWT } from '../services/jwt.service';

export const sendOtp = async (req: Request, res: Response) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone is required' });

  const otp = generateOTP();
  await storeOTP(phone, otp);

  console.log(`[Mock SMS] OTP for ${phone}: ${otp}`);
  res.json({ status:'success', message: 'OTP sent' });
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP are required' });
  console.log(phone, otp);
  const isValid = await verifyOTP(phone, otp);
  if (!isValid) return res.status(200).json({ status: 'fail', message: 'Invalid OTP' });

  const token = signJWT({ phone });
  res.json({ status: 'success', token });
};
