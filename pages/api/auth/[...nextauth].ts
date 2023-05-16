import nextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const options: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.JWT_SECRET,
}

console.log("github_id", process.env.GITHUB_ID)

export default nextAuth(options)