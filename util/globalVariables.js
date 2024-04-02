import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const getMongoUri = () => {
  return `${MONGODB_URI}`;
};

export default {
  getMongoUri,
};
