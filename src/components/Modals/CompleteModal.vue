<template>
	<transition>
		<div class="fixed top-0 left-0 w-full h-full bg-[#00000080] transition-all ease-in-out md:px-0 px-5">
			<div class="md:w-[400px] mt-10 mx-auto p-10 bg-white rounded-lg max-h-[800px] relative overflow-y-auto flex flex-col items-center gap-5">
				<CheckIcon />
				<h2 class="font-bold text-2xl text-center mb-2">Thanks for your support!</h2>
				<Paragraph
					text="Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."
				/>
                <BasicButton text="Got it!" @click="updateModalCompletedStatus"/>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
    import { inject } from 'vue';
	import { CheckIcon, Paragraph, BasicButton } from '@/components';

	const { updateModalCompletedStatus } = inject<any>('ModalCompleted');

</script>
