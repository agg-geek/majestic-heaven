import { auth } from '@/app/_lib/auth';

export const middleware = auth;

// middleware for /account
export const config = {
	matcher: ['/account'],
};
