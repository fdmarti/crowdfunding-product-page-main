<template>
	<div class="flex flex-col gap-5">
		<h3 class="font-bold text-lg">About this project</h3>
		<Paragraph
			text="The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand."
		/>
		<Paragraph
			text="Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand."
		/>

		<CardPrice v-for="prices in cardPrices" :disabled="prices.state">
			<CardPriceContent :pricesDetails="prices" />
		</CardPrice>
	</div>
</template>

<script setup lang="ts">
	import { cardPrices } from '@/data';
	import { Paragraph, CardPrice, CardPriceContent } from '@/components';
</script>
