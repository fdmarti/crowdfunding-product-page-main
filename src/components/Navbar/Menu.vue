<template>
	<ul
		class="flex sm:flex-row flex-col sm:top-0 left-0 top-24 gap-7 sm:p-0 p-4 sm:items-center sm:relative absolute sm:bg-transparent bg-white sm:w-auto w-full items-start shadow-2xl shadow-black"
	>
		<li v-for="link in links" class="sm:border-0 border-b-[1px] sm:p-0 pb-2 sm:w-auto w-full">
			<Link :link="link" />
		</li>
	</ul>
</template>

<script setup lang="ts">
	import { links } from '@/data';
	import { Link } from '@/components';
</script>
