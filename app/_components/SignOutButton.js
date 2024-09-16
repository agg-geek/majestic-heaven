import { signOutAction } from '@/app/_lib/actions';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

// this signout button is called from SideNavigation which is a client comp.
// so we can actually use an onclick in this signoutbutton
// however, since we want to keep the auth flow completely on the server
// we again use a form and server action
// server actions can also be used in a client comp.
export default function SignOutButton() {
	return (
		<form action={signOutAction}>
			<button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
				<ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
				<span>Sign out</span>
			</button>
		</form>
	);
}
