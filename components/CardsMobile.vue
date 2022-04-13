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
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
</template>
<script>
import serverAxios from '../api/axios/serverAxios'
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
		this.cards = await serverAxios.get(ROUTES.api.cards)
		this.cards = this.cards.data
		Swiper.use([Navigation, Pagination, Autoplay])
		const swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			modules: [Navigation, Pagination, Autoplay],
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	},
}
</script>
<style lang="">
</style>
