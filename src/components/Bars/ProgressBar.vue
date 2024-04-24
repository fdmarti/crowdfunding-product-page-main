<template>
	<div class="h-3 w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
		<div class="h-3 bg-teal-500 rounded-full" :style="`width: ${length}%`"></div>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		length: number;
	}

	const { length } = withDefaults(defineProps<Props>(), {
		length: 50,
	});
</script>
