import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getAllUsersQueriedFunc } from "@/controllers/UserController";
const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // perform you login logic
        // find out user from db
        const usersArray=await getAllUsersQueriedFunc({email:email, password:password});
        if(usersArray.length==0 || usersArray[0].email!==email || usersArray[0].password!==password){
            throw new Error("invalid credential or user not found");
        }
        // if (email !== "john@gmail.com" || password !== "1234") {
        //   throw new Error("invalid credentials");
        // }

        // if everything is fine
        // return {
        //   id: "1234",
        //   name: "John Doe",
        //   email: "john@gmail.com",
        //   role: "admin",
        // };

        return usersArray[0];
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);