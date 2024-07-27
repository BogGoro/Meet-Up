<script lang="ts">
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		event: Event | null;
	}

	export let data: MyDataType;

	$: ({ event } = data);
</script>

<svelte:head>
	<title>{event?.title || 'Event not found'}</title>
	<meta name="description" content={event?.description || 'Event does not exist in the database'} />
</svelte:head>

<h1>Here will be single event page</h1>
<a href="/events/{event?.id}/edit">
	<button> Edit event </button>
</a>
<div>{event?.title} - {event?.description} - {event?.address} - {event?.date} - {event?.time}</div>
