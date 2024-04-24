<template>
	<div
		:class="`relative w-full max-w-[720px] rounded-md md:p-10 p-5 border-2 ${cardState} ${selectedCard}`"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	import { computed, toRefs } from 'vue';

	interface Props {
		disabled?: boolean;
		selected?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		disabled: true,
		selected: false,
	});

	const { disabled, selected } = toRefs(props);

	const cardState = computed(() => {
		return disabled ? '' : 'opacity-40 cursor-not-allowed';
	});

	const selectedCard = computed(() => {
		return selected.value ? 'border-teal-500' : '';
	});
</script>
