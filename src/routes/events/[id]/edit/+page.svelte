<script lang="ts">
	import type { Event } from '$lib/types/event';

	interface MyDataType {
		event: Event;
	}

	export let data: MyDataType;

	$: ({ event } = data);
</script>

<h1>Here will be event editing</h1>
<div>{event.title} - {event.description} - {event.address} - {event.date} - {event.time}</div>
