import type { Event } from '$lib/types/event';

export async function load() {
	try {
		const response = await fetch('http://localhost:8000/api/events');
		if (!response.ok) {
			throw new Error('Failed to fetch events');
		}

		const events: Event[] = await response.json();
		return {
			events
		};
	} catch (error) {
		console.error('Error fetching events:', error);
		return {
			events: []
		};
	}
}
