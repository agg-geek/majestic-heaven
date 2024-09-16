'use client';

import { updateGuestAction } from '@/app/_lib/actions';

export default function UpdateProfileForm({ guest, children }) {
	const { fullName, email, nationality, nationalID, countryFlag } = guest;

	// the form data will automatically be put in a formData using
	// name and value and will be accessible by the server action
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
				<button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
					Update profile
				</button>
			</div>
		</form>
	);
}
