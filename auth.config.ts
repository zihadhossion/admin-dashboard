export const authConfig = {
    session: {
        strategy: "jwt",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            // console.log("User data: ", user);
            if (user) {
                token.id = user.id;
                token.img = user.img;
                token.username = user.username;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // console.log("Token data: ", token);
            session.user = {
                id: token.id,
                img: token.img,
                username: token.username,
                email: token.email,
            };
            return session;
        },
    },
}