import express from 'express';
import { proxy } from './utils/proxy';
import { verifyJWT } from './middleware/auth';

const router = express.Router();

// Public routes (no JWT)
router.post('/auth/send-otp', proxy('http://auth-service:5001'));
router.post('/auth/verify-otp', proxy('http://auth-service:5001'));

// Protected routes
router.use('/messages', verifyJWT, proxy('http://message-service:5002'));
router.use('/websocket', verifyJWT, proxy('http://websocket-service:5003'));

export default router;
