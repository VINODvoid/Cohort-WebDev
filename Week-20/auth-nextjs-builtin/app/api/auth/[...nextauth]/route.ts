import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
    providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Email',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const username = credentials?.username;
      const password = credentials?.password;
    //   db request for check if this username and password is correct
        const user = {
            name:"vinod",
            id:"1",
            username:"harkira@gmail.com"
        }
        if(user)
        {
            return user;
        }
        else{
            return null;
        }
    }
  }),
  GoogleProvider({
  clientId: "dgdfg",
  clientSecret: "sfds",
  }),
  GithubProvider({
    clientId:"dfdd",
    clientSecret:"fdsfdf"

  })

],
secret:process.env.NEXTAUTH_SECRET,
},);

export {handler as GET , handler as POST}