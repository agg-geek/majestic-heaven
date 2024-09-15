import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks: {
		// return true if current user is authorized to go through
		// auth is the current session
		authorized({ auth, request }) {
			return Boolean(auth?.user);
		},
	},
};

export const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth(authConfig);
