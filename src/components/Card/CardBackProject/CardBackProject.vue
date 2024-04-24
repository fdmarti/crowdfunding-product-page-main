<template>
	<div :class="`flex items-start justify-start gap-2 ${stateCard}`">
		<InputRadio name="back-project" :state="!state" :id="id" />
		<section class="mt-1">
			<div class="flex justify-between md:items-center mb-3 flex-col md:flex-row items-start gap-3">
				<section class="flex gap-5">
					<h2 class="font-bold hover:text-teal-500 hover:cursor-pointer">
						{{ title }}
					</h2>
					<h4 class="font-bold text-teal-500">{{ subtitle }}</h4>
				</section>
				<section v-if="amountLeft">
					<span class="font-bold text-3xl">{{ amountLeft }} </span>
					<span class="text-gray-400 font-semibold"> left</span>
				</section>
			</div>
			<Paragraph :text="description" />
		</section>
	</div>
	<PledgeProject v-if="selected" />
</template>

<script setup lang="ts">
	import { computed, toRefs } from 'vue';
	import { Paragraph, InputRadio } from '@/components';
	import { PledgeProject } from '@/sections';
	import { BackProjectContent } from '@/interface';

	const props = defineProps<BackProjectContent>();
	const { amountLeft, description, state, subtitle, title, id } = props;
	const { selected } = toRefs(props);

	const stateCard = computed(() => {
		return !state ? 'opacity-35 cursor-not-allowed' : '';
	});
</script>
