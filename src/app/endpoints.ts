import axios from 'axios';
import { Client } from '../features/clients/types';

export const getClientList: (abortSignal: AbortSignal) => Promise<Array<Client>> =
  async (abortSignal) => {
    try {
      const req = await axios({
          method: 'GET',
          url: 'http://localhost:5000/api/v1/clients',
          signal: abortSignal,
      });
      return req.data;
    } catch (e) {
      console.log(e);
    }
  };
