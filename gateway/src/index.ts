import express from 'express';
import cors from 'cors';
import routes from './routes';
import * as https from 'https';
import fs from 'fs';
import { config } from './config';

const app = express();

// Load SSL certificate
const options = {
  key: fs.readFileSync('/Users/vikranja2/Documents/work/ssl/key.pem'),
  cert: fs.readFileSync('/Users/vikranja2/Documents/work/ssl/cert.pem')
};

app.use(cors());
app.use(express.json());
app.use('/', routes);


// Start HTTPS server
// https.createServer(options, app).listen(443, () => {
//   console.log('HTTPS server running on port 443');
// });
app.listen(config.port, () => {
  console.log(`Gateway running on http://localhost:${config.port}`);
});
