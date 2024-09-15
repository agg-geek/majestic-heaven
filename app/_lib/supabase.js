import { createClient } from '@supabase/supabase-js';

// used secret key because unauthenticated users should be able to see all cabins
// so bypass row level security for all cabins using the supabase secret key
// instead of the public key
export const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SECRET_KEY
);
