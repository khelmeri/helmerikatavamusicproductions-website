import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  throw new Error(
    "Please define the DB_URL environment variable inside .env.local",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function handleError(error) {
  throw new Error("Yhteysvirhe. Koita hetken päästä uudestaan.");
}

export async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      autoIndex: true,
    };

    cached.promise = mongoose
      .connect(DB_URL, options)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => handleError(error));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
