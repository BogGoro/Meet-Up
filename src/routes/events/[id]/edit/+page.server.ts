import type { Event } from '$lib/types/event';

export const load = async ({ params }) => {
	const { id } = params;

	try {
		const response = await fetch(`http://localhost:8000/api/events/${id}`);
		if (!response.ok) {
			throw new Error('Failed to fetch event');
		}

		const event: Event = await response.json();
		return {
			event
		};
	} catch (error) {
		console.error('Error fetching event:', error);
		return {
			event: null
		};
	}
};
