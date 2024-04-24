<template>
	<section class="relative">
		<LogoMastercraft class="absolute right-1/2 -top-20" />
		<h1 class="text-center font-bold sm:text-3xl text-xl my-3">
			Mastercraft Bamboo Monitor Riser
		</h1>
		<Paragraph
			text="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
			class="text-center"
		/>
		<div class="flex sm:justify-between justify-center items-center mt-10 max-w-lg mx-auto sm:gap-0 gap-3">
			<BasicButton text="Back this project" @click="updateModalStatus"/>
			<Badge text="Bookmarked"/>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { inject } from 'vue'
	import { LogoMastercraft, Paragraph, BasicButton, Badge } from '@/components';

	const { updateModalStatus } = inject<any>('ModalBackProject');

</script>
