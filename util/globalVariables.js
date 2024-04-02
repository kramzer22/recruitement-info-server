import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PASSPHRASE = process.env.PASSPHRASE;

const getMongoUri = () => {
  return `${MONGODB_URI}`;
};

const getPassPhrase = () => {
  return `${PASSPHRASE}`;
};

export default {
  getMongoUri,
  getPassPhrase,
};
