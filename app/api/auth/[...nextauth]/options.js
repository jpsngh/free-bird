import NextAuth,{AuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {

    providers:[
        CredentialsProvider({
            name : 'credentials',
            credentials:{
                email : {label: 'Email', type: 'text', placeholder:"Enter your Email"},
                password : {label: 'Password', type: 'password', placeholder:"Enter your password"}
            },
            async authorize (credentials){
                const user = {email:"jp",password:"jp"}
                    if(!credentials?.email || !credentials?.password){
                        throw new Error("Invalid credentials at pass")
                    }
                    if(credentials?.email !== user.email && credentials?.password !== user.password){
                        throw new Error ("Invalid credentials at check")
                    }
                        return user;
            }

        })
    ]

}

export default NextAuth(authOptions)