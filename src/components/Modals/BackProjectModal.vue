<template>
	<transition>
		<div
			class="fixed top-0 left-0 w-full h-full bg-[#00000080] transition-all ease-in-out md:px-0 px-5"
		>
			<div
				class="md:w-[800px] mt-10 mx-auto p-10 bg-white rounded-lg max-h-[800px] relative overflow-y-auto"
			>
				<CloseModalIcon @click="updateModalStatus" />
				<h2 class="font-bold text-xl mb-2">Back this project</h2>
				<Paragraph
					text="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"
					class="mb-5"
				/>

				<section class="flex flex-col gap-5">
					<CardPrice v-for="card in BackProjectCards" :selected="card.selected">
						<CardBackProject
							:id="card.id"
							:title="card.title"
							:subtitle="card.subtitle"
							:amountLeft="card.amountLeft"
							:state="card.state"
							:description="card.description"
							:selected="card.selected"
						/>
					</CardPrice>
				</section>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
	import { inject, provide } from 'vue';
	import {
		Paragraph,
		CloseModalIcon,
		CardPrice,
		CardBackProject,
	} from '@/components';
	import { BackProjectCards } from '@/data';

	const { updateModalStatus } = inject<any>('ModalBackProject');

	const updateCardSelected = (id: string) => {
		BackProjectCards.forEach((card) => {
			if (id === card.id) card.selected = true;
			else card.selected = false;
		});
	};

	provide('ModalBackProjectSelected', {
		updateCardSelected,
	});
</script>
