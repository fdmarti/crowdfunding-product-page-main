<template>
	<div class="inline-flex items-center">
		<label
			class="relative flex items-center p-3 rounded-full cursor-pointer"
			:htmlFor="id"
		>
			<input
				:name="name"
				type="radio"
				class="before:content[''] peer relative border-gray-500 h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-teal-200 text-teal-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-teal-500 before:opacity-0 before:transition-opacity checked:border-teal-700 checked:before:bg-teal-700 hover:before:opacity-10"
				:id="id"
				:v-model="id"
				:disabled="state"
				@change="handleChangeRadio(id)"
			/>
			<span
				class="absolute text-teal-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3.5 w-3.5"
					viewBox="0 0 16 16"
					fill="currentColor"
				>
					<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
				</svg>
			</span>
		</label>
	</div>
</template>

<script setup lang="ts">
	import { inject } from 'vue';

	interface Props {
		name: string;
		state: boolean;
		id: string;
	}

	const { name, state, id } = defineProps<Props>();

	const { updateCardSelected } = inject<any>('ModalBackProjectSelected');

	const handleChangeRadio = (id: string) => {
		updateCardSelected(id);
	};
</script>
