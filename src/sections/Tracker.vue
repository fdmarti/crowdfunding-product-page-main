<template>
	<div class="flex flex-col gap-8">
		<section class="flex sm:flex-row flex-col justify-around items-center sm:items-start gap-5 sm:gap-0">
			<TrackerText price="$89,914" text="of $100,000 backed" />
			<TrackerText price="5,007" text="total backers" />
			<TrackerText price="56" text="days left" :border="false" />
		</section>
		<ProgressBar :length="80"/>
	</div>
</template>

<script setup lang="ts">
	import { ProgressBar, TrackerText } from '@/components';
</script>
