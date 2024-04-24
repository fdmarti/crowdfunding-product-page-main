<template>
	<nav class="flex items-center justify-between max-w-7xl mx-auto py-10 px-5 relative">
		<div>
			<Logo />
		</div>
		<Menu v-if="showMenu" />
		<button class="block sm:hidden">
			<HamburguerIcon @click="handleshowMenu" v-if="!showMenu"/>
			<CloseMenuIcon v-else/>
		</button>
	</nav>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { Logo, Menu, HamburguerIcon, CloseMenuIcon } from '@/components';

	const showMenu = ref<boolean>(true);

	const checkSizeDevice = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 640) {
			showMenu.value = false;
		} else {
			showMenu.value = true;
		}
	};

	const handleshowMenu = () => {
		showMenu.value = !showMenu.value;

		if (showMenu.value) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'auto';
		}
	};

	onMounted(() => {
		window.addEventListener('resize', checkSizeDevice);
	});
</script>
