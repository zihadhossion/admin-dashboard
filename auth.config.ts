export const authConfig = {
    session: {
        strategy: "jwt",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            // When the user logs in, add user data to the token
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
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
}