import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  host: process.env.HOST || 'http://localhost',
  port: parseInt(process.env.PORT) || 5000,
  clientUrls: process.env.CLIENT_URLS.split(','),
  mongoUrl: process.env.MONGO_URL,
  fbProjectId: process.env.FIREBASE_PROJECT_ID,
  fbPrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  fbClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

console.log(JSON.stringify(config, null, 2));

export default () => config;
