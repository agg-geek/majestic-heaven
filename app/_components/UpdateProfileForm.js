'use client';

import { updateGuestAction } from '@/app/_lib/actions';
import { useFormStatus } from 'react-dom';

export default function UpdateProfileForm({ guest, children }) {
	const { fullName, email, nationality, nationalID, countryFlag } = guest;

	return (
		<form
			action={updateGuestAction}
			className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
		>
			<div className="space-y-2">
				<label>Full name</label>
				<input
					disabled
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					defaultValue={fullName}
					name="fullName"
				/>
			</div>

			<div className="space-y-2">
				<label>Email address</label>
				<input
					disabled
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
					defaultValue={email}
					name="email"
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					<img
						src={countryFlag}
						alt="Country flag"
						className="h-5 rounded-sm"
						name="countryFlag"
					/>
				</div>

				{children}
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
					defaultValue={nationalID}
					name="nationalID"
				/>
			</div>

			<div className="flex justify-end items-center gap-6">
				<Button />
			</div>
		</form>
	);
}

function Button() {
	// useFormStatus cannot be used in the component which has the form itself
	// it can only be used in a componend rendered inside the form
	// hence create this new Button comp. and use it inside the form
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
		>
			{pending ? 'Updating...' : 'Update profile'}
		</button>
	);
}
