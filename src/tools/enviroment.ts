import * as dotenv from 'dotenv';

dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;
