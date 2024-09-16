import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from '@/app/_lib/data-service';

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks: {
		authorized({ auth, request }) {
			return Boolean(auth?.user);
		},
		// store the logged in guest in supabase if not already present
		// signIn will run after the user put their credentials
		// but before they are actually signed in
		async signIn({ user, account, profile }) {
			try {
				const existingGuest = await getGuest(user.email);

				// if guest does not exist on supabase, create guest
				if (!existingGuest) {
					await createGuest({
						email: user.email,
						fullName: user.name,
					});
				}

				return true;
			} catch (e) {
				console.log(e);
				return false;
			}
		},
		// the guest is logged and the guest is created on supabase,
		// however, we don't know the id of this new guest (we are just logged in)
		// this id is required for updating the profile of the guest, getting reservations by guest
		// hence populate the guestId on the session
		// session() runs after the signIn callback and is run everytime the auth() is called
		async session({ session, user }) {
			const guest = await getGuest(session.user.email);
			session.user.guestId = guest.id;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
