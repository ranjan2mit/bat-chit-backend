import express from 'express';
import cors from 'cors';
import routes from './routes';
import { config } from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(config.port, () => {
  console.log(`Gateway running on http://localhost:${config.port}`);
});
