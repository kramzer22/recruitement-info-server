import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PASSPHRASE = process.env.PASSPHRASE;
const JWT_SECRET = process.env.JWT_SECRET;

const getMongoUri = () => {
  return `${MONGODB_URI}`;
};

const getPassPhrase = () => {
  return `${PASSPHRASE}`;
};

const getJWTSecret = () => {
  return `${JWT_SECRET}`;
};

export default {
  getMongoUri,
  getPassPhrase,
  getJWTSecret,
};
