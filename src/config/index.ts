/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_STRING,
  default_user_pass: process.env.DEFAULT_USER_PASS,
  salt_rounds: process.env.SALT_ROUNDS,
};
