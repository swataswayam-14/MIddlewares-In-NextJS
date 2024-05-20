//middleware to track the number of requests

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

let requestCount = 0;

export function middleware(request:NextRequest){
    console.log(request.nextUrl.pathname);
    
    if(request.nextUrl.pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    if(request.nextUrl.pathname.startsWith('/api/user')){
        return NextResponse.next();
    }

    requestCount ++;
    console.log("Number of requests is "+requestCount);

    return NextResponse.next(); //calling the next function that is the request handeler after the middleware is executed
    
    
}

//the below code is added such that the middleware tracks only the request that start with /api

export const config = {
    matcher: '/api/:path*'
}