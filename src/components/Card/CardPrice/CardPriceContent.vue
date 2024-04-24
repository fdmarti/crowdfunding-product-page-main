<template>
	<section class="flex sm:flex-row flex-col justify-between items-start sm:items-center mb-3">
		<h3 class="font-bold text-lg">{{ title }}</h3>
		<span class="font-medium text-teal-500">{{ price }}</span>
	</section>
	<Paragraph :text="description" />
	<section class="flex sm:flex-row flex-col sm:items-center justify-between items-start mt-3 gap-5 sm:gap-0">
		<div class="flex gap-1 justify-start items-center">
			<span class="font-bold text-4xl">{{ amountLeft }}</span>
			<Paragraph text="left" />
		</div>
		<BasicButton
			:text="state ? 'Select Reward' : 'Out of stock'"
			:disabled="!state"
		/>
	</section>
</template>

<script setup lang="ts">
	import { CardPrices } from '@/interface';
	import { Paragraph, BasicButton } from '@/components';

	const props = defineProps<{ pricesDetails: CardPrices }>();
	const { amountLeft, description, price, state, title } = props.pricesDetails;
</script>
