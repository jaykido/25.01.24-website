import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("No user Found!");
    }

    const correctPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!correctPassword) {
      throw new Error("Incorrect Password!");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something is wrong with your credentials");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectToDb();
        try {
          const newuser = await User.findOne({ email: profile.email });
          if (!newuser) {
            const newUser = new User({
              username: user.name,
              email: profile.email,
              image: profile.image,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
