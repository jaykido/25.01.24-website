export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      console.log("The user is: ", user, "and the auth is ", auth);
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnAdminPanel && !user.isAdmin) {
        return false;
      }
      if (isOnBlogPage && !user.isAdmin) {
        return false;
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
