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
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // When the user logs in, add user data to the token
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.username = user.username;
                token.image = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            // Add token data to the session
            session.user = {
                id: token.id,
                email: token.email,
                username: token.username,
                image: token.image,
            };
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});