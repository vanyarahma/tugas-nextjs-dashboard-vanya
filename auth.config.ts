import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const pathname = request.nextUrl.pathname;
      const isOnCustomers = pathname.startsWith('/customers');

      if (isOnCustomers) {
        return isLoggedIn;
      }

      if (isLoggedIn) {
        return Response.redirect(
          new URL('/customers', request.nextUrl)
        );
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
