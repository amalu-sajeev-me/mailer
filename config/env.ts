import { ProcessEnv } from 'types';

export const env: ProcessEnv = {
  PORT: parseInt(process.env.PORT, 10) || 3000,
};
