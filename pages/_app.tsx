import '../styles/globals.css'
import { FC } from "react";
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

interface MyAppProps extends AppProps {
  session: Session;
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
