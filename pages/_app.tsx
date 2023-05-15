import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

interface MyAppProps extends AppProps {
  session: any
}
function MyApp({ Component, pageProps, session }: MyAppProps) {
  console.log(session)
  return <SessionProvider session={session}> <Component {...pageProps} /></SessionProvider>
}

export default MyApp
