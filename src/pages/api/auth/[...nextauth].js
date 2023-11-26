import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import User from "@/models/user";
import { dbConnect } from "@/lib/mongoose";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Käyttäjänimi", type: "text" },
        password: { label: "Salasana", type: "password" },
      },

      // User sign in authorize logic
      async authorize(credentials, req) {
        if (!credentials.username || !credentials.password) {
          return null;
        }

        await dbConnect().catch((error) => {
          console.log(error);
          throw new Error("Tietokantaan ei saatu yhteyttä");
        });

        const user = await User.findOne({ username: credentials.username });

        if (!user) {
          return null;
        }

        const passwordsMatch = credentials.password === user.password;
        if (!passwordsMatch) {
          return null;
        }

        return user.username;
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },
  callbacks: {
    // jwt callback is only called when token is created
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // session callback is called whenever a session for that particular user is checked.
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = token.user;
      // you might return this in new version
      return session;
    },
  },
};

export default NextAuth(authOptions);
