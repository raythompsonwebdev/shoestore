import "../styles/sass/style.scss";
import React from "react";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
