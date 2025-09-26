import { Request, Response } from 'express';
import axios from 'axios';

export const proxy = (target: string) => {
  return async (req: Request, res: Response) => {
    try {

      console.log(`[Proxy] ${req.method} ${req.originalUrl} -> ${target}${req.originalUrl}`, req.body, req.query, req.headers);
      const response = await axios({
        method: req.method,
        url: `${target}${req.originalUrl}`,
        // headers: {
        //   ...req.headers,
        //   host: undefined,
        // },
        data: req.body,
        params: req.query,
      });

      res.status(response.status).json(response.data);
    } catch (error: any) {
      console.log(error)
      console.error(`[Proxy Error] ${error.message}`);
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        res.status(500).json({ error: 'Service unavailable' });
      }
    }
  };
};
