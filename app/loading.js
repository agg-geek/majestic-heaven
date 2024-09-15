import Spinner from '@/app/_components/Spinner';

// having a loading.js file will enable streaming
// so the data is streamed in chunks
// this single loading.js file will enable streaming for the entire app
// even if data fetching is not required in a component
export default function Loading() {
	return <Spinner />;
}
