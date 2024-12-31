import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "./lib/models";
import { connectToDB } from "./lib/mongodb";
import { authConfig } from "./auth.config";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    await connectToDB();

                    const user = await User.findOne({
                        email: credentials?.email
                    })
                    if (user) {
                        const password = credentials.password as string;
                        const isMatch = await bcrypt.compare(
                            password,
                            user.password
                        );

                        if (!isMatch) {
                            throw new Error("Invalid password");
                        }
                        return user;
                    } else {
                        throw new Error("User not found");
                    }
                }
                catch (error) {
                    console.error(error);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // console.log("User data: ", user);
            return { ...token, ...user }
        },
        async session({ session, token }) {
            // console.log("Token data: ", token);
            session.user = token as any;
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});