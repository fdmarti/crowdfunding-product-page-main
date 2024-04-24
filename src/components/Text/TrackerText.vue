<template>
	<div :class="`flex flex-col gap-1 sm:pr-16 pb-10 ${border ? 'sm:border-r-2 sm:border-b-0 border-b-2' : ''}`">
		<h3 class="font-bold text-slate-900 text-4xl">{{ price }}</h3>
		<Paragraph :text="text" />
	</div>
</template>

<script setup lang="ts">
	import { Paragraph } from '@/components';

	interface Props {
		price?: string;
		text?: string;
		border?: boolean;
	}

	const { price, text } = withDefaults(defineProps<Props>(), {
		price: '9500',
		text: 'of $100.000 something',
		border: true,
	});
</script>
