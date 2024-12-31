import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
const { auth } = NextAuth(authConfig);

const LOGIN = "/login";
const REGISTER = "/register";

export async function middleware(request: any) {
    const { nextUrl, } = request;
    const pathname = nextUrl.pathname;
    // Exclude public routes
    const publicRoutes = [LOGIN, REGISTER];

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    const session = await auth();
    const isAuthenticated = !!session?.user;

    if (!isAuthenticated)
        return Response.redirect(new URL(LOGIN, nextUrl));
};

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};