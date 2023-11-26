import { MongoClient } from "mongodb";

if (!process.env.DB_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.DB_URL as string; // ? mongodb connection string
const options = {};

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

class Singleton {
  private static _instance: Singleton;
  private client: MongoClient;
  private clientPromise: Promise<MongoClient>;
  private constructor() {
    this.client = new MongoClient(uri, options);
    if (process.env.NODE_ENV === "development") {
      // ? In development mode, use a global variable so that the value
      // ? is preserved across module reloads caused by HMR (Hot Module Replacement).
      if (!global._mongoClientPromise) {
        global._mongoClientPromise = this.clientPromise;
      }
    }
    this.clientPromise = this.client.connect();
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance.clientPromise;
  }
}
const clientPromise = Singleton.instance;

// ? Export a module-scoped MongoClient promise. By doing this in a
// ? separate module, the client can be shared across functions.
export default clientPromise;
