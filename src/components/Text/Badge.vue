<template>
	<div class="bg-gray-200 flex items-center rounded-full">
        <BookMarkIcon />
		<span class="text-teal-700 font-bold pl-4 pr-6 hidden sm:block">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
    import { BookMarkIcon } from '@/components'

	interface Props {
		text?: string;
	}

	const { text } = withDefaults(defineProps<Props>(), {
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
	});
</script>
