import express from 'express';
import authRoutes from './routes/auth.routes';
import { config } from './config';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(config.AUTH_SERVICE_PORT, () => {
  console.log(`Auth service running at http://localhost:${config.AUTH_SERVICE_PORT}`);
});
