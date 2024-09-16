// we keep the whole authentication flow on the server itself
// for signin, we don't want to add an onclick to the below button
// (onclick will only work in client component)
// hence use server action (see actions.js)

import { signInAction } from '@/app/_lib/actions';

export default function SignInButton() {
	return (
		<form action={signInAction}>
			<button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
				<img
					src="https://authjs.dev/img/providers/google.svg"
					alt="Google logo"
					height="24"
					width="24"
				/>
				<span>Continue with Google</span>
			</button>
		</form>
	);
}
