<template>
	<button
		:class="` text-gray-100 px-7 py-4 font-semibold rounded-full ${setBtnStateDisabled} `"
		:disabled="disabled"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	interface Props {
		text?: string;
		disabled?: boolean;
	}

	const { text, disabled } = withDefaults(defineProps<Props>(), {
		text: 'Default',
		disabled: false,
	});

	const setBtnStateDisabled = computed(() => {
		return disabled
			? 'cursor-not-allowed bg-gray-500'
			: 'bg-teal-600 hover:bg-teal-700';
	});
</script>
