<template>
	<Hero>
		<Navbar />
	</Hero>
	<section class="flex flex-col items-center relative -top-20 gap-7 px-5">
		<Card>
			<MasterClassBambooHero />
		</Card>
		<Card>
			<Tracker />
		</Card>
		<Card>
			<AboutThisProject />
		</Card>
	</section>

	<BackProjectModal v-if="showBackProjectModal" />
	<CompleteModal v-if="showCompletedModal" />
</template>

<script setup lang="ts">
	import {
		Navbar,
		Hero,
		Card,
		BackProjectModal,
		CompleteModal,
	} from '@/components';
	import { useModalStatus } from '@/composables';
	import { MasterClassBambooHero, Tracker, AboutThisProject } from '@/sections';

	const { showBackProjectModal, showCompletedModal } = useModalStatus();
</script>
