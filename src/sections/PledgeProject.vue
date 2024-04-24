<template>
	<section>
		<hr class="my-5" />
		<div
			class="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0"
		>
			<Paragraph text="Enter your pledge" />
			<section class="basis-1/3 flex items-center gap-4">
				<div class="relative">
					<span class="font-semibold text-gray-400 absolute top-[13px] left-4"
						>$</span
					>
					<input
						type="text"
						placeholder="0"
						class="text-right outline-teal-700 rounded-full p-2 py-3 border-2 border-teal-500 max-w-[100px]"
						pattern="\d*"
						maxlength="4"
						v-model="amountPledge"
					/>
				</div>
				<BasicButton text="Continue" @click="handlePledgeProject" />
			</section>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { inject, ref } from 'vue';
	import { Paragraph, BasicButton } from '@/components';

	const amountPledge = ref<number>();

	const handlePledgeProject = async () => {
		if (!amountPledge.value) return;
		await updateModalStatus();
		await updateModalCompletedStatus();
	};

	const { updateModalStatus } = inject<any>('ModalBackProject');
	const { updateModalCompletedStatus } = inject<any>('ModalCompleted');
</script>
