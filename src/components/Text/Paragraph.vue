<template>
	<p class="text-gray-500 font-medium leading-7">{{ text }}</p>
</template>

<script setup lang="ts">
	interface Props {
		text?: string;
	}

	const { text } = withDefaults(defineProps<Props>(), {
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
	});
</script>
