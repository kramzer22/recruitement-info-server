import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;

export default {
  MONGODB_URI,
  MONGODB_CLUSTER,
};
