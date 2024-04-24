<template>
	<a :href="url" class="sm:text-white font-medium hover:cursor-pointer hover:opacity-75 sm:text-base text-lg">{{ text }}</a>
</template>

<script setup lang="ts">
	import type { Links } from '@/interface';
	const props = defineProps<{ link: Links }>();
	const { text, url } = props.link;
</script>
