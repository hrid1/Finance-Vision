import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Thor:Loki@shil.m34eo.mongodb.net/financeApp?retryWrites=true&w=majority&appName=Shil";

if (MONGODB_URI) {
  throw new Error("Plz define the mongodb URI");
}
// Global cache to prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  // Wait for the connection to finish and store it
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
