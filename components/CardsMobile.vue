<template lang="">
<div class="swiper">
			<div class="swiper-wrapper">
				<div
					v-for="(card, index) in cards.data"
					:key="card.id"
					class="swiper-slide"
					:class="`slide--${index}`"
				>
					<div class="slider-content">
						<div class="card-name">
							<div style="display: flex">
								<div class="tiny-circles-red"></div>
								<div class="tiny-circles-red"></div>
							</div>
							{{ card.name }}
						</div>
						<!-- <NuxtLink to="/detail">Home page</NuxtLink> -->
						<img
							style="border: 2px solid; border-radius: 2%"
							:src="`${card.images.small}`"
							alt=""
							@click="
								$router.push({
									path: `/detail/${card.id}`,
								})
							"
						/>

						<div
							style="
								display: flex;
								margin: 10px;
								align-items: center;
								align-content: center;
							"
						>
							<div class="card-id">{{ card.id }}</div>
							<div class="card-type">
								<div
									:class="`type--${type}`"
									v-for="type in card.types"
									:key="type"
								>
									{{ type }}
								</div>
							</div>
						</div>

						<div class="card-index">{{ index }}/{{ cards.data.length }}</div>
					</div>
				</div>
			</div>
			<!-- If pagination is needed -->
			<!-- <div class="swiper-pagination"></div> -->
			<!-- If navigation buttons are needed -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
</template>
<script>
import serverAxios from '../api/axios/serverAxios'
// import { ROUTES } from "@/api/connection.js";
import { ROUTES } from '../api/connection.js'
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
	components: {
		Swiper,
	},
	name: 'CardsMobile',
	data() {
		return {
			cards: [],
		}
	},
	async mounted() {
		debugger
		this.cards = await serverAxios.get(ROUTES.api.cards)
		this.cards = this.cards.data
		Swiper.use([Navigation, Pagination, Autoplay])

		// init Swiper:
		/* eslint-disable no-unused-vars */
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			// @see https://swiperjs.com/swiper-api#parameters
			direction: 'horizontal',
			loop: true,
			// remove unused modules if needed
			modules: [Navigation, Pagination, Autoplay],
			// Pagination if needed
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			// Autoplay if needed
			autoplay: {
				delay: 3000,
			},
			// Navigation arrows if needed
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			// Configure other options. Not tested
		})
	},
}
</script>
<style lang="">
</style>
