<template>
	<main>
		<header class="header-pokedex">
			<div class="big-circle"></div>
			<div class="tiny-circles">
				<div style="display: flex">
					<div class="tiny-circles-red"></div>
					<div class="tiny-circles-yellow"></div>
					<div class="tiny-circles-green"></div>
				</div>
				<div class="border-header"></div>
			</div>
		</header>
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
	</main>
</template>

<script>
// - Visão 1 listagem das cartas
// grid layout: component card com lista
// ---- img, nome, id, tipos, redirect detalhe
// -------- img alta definição, nome, id, tipos, resistencias
// -------- fraquezas, lista dos ataques, modal detalhe
// ------------ mana, nome, dano, descrição
//
// - Visão 2 detalhe da carta
//    - componente: Modal detalhe de habilidade

// Import Swiper Vue.js components
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import serverAxios from '../api/axios/serverAxios'
// import { ROUTES } from "@/api/connection.js";
import { ROUTES } from '../api/connection.js'

export default {
	components: {
		Swiper,
	},
	name: 'IndexPage',
	data() {
		return {
			cards: [],
		}
	},
	async mounted() {
		// this.sites = await serverAxios.get(ROUTES.api.cards + 'xy1-1')
		this.cards = await serverAxios.get(ROUTES.api.cards)
		this.cards = this.cards.data
		console.log(this.cards)

		// configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
		// previously it was before export default. Moved here for performance issues. Move back in case of problems.
		// add or remove unused modules
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

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); */

* {
	box-sizing: border-box;
	margin: 0;
}
html,
body {
	height: auto;
	margin: 0;
	background-color: #fb1b1b;
}

.header-pokedex {
	display: flex;

	height: 10vh;
	background-color: #fb1b1b;
	border: 1px solid;
	border-top: 0;
	border-left: 0;
	border-right: 0;

	border-image: linear-gradient(to right, #000 46%, transparent 40%) 100% 1;
}
.border-header {
	width: 100%;
	height: 50%;
	border-top: 1px solid black;
	border-left: 10px solid black;
	border-radius: 50% 0 0 0;

	margin-top: 5vh;
}
.big-circle {
	margin: 11px 18px 11px 32px;

	width: 60px;
	height: 45px;

	border-radius: 50%;
	border: 2px solid white;
	/* border-image-source: linear-gradient(to bottom right, black, white); */
	background-color: #196a9f;
	background-image: radial-gradient(white 5%, #196a9f 65%);
}
.tiny-circles {
	width: 100%;
	height: 100%;
	display: flex;
	padding: 10px;
}
.tiny-circles-red {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 1px solid black;
	background-color: #fb1b1b;
	background-image: radial-gradient(white 5%, #fb1b1b 65%);

	margin-right: 10px;
}
.tiny-circles-yellow {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 1px solid black;
	background-color: #ffcc00;
	background-image: radial-gradient(white 5%, #ffcc00 65%);

	margin-right: 10px;
}
.tiny-circles-green {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 1px solid black;
	background-color: #5ea465;
	background-image: radial-gradient(white 5%, #5ea465 65%);

	margin-right: 10px;
}
.swiper {
	height: 70vh;
	width: 80vw;

	font-family: 'Press Start 2P', cursive;

	overflow: hidden;
	position: relative;

	border: 2px solid black;
	border-radius: 5% 5% 5% 20%;
	background-color: #f5f5f5;

	margin-top: 5vh;
}
.swiper-slide {
	align-items: center;
	display: flex;
	justify-content: center;
}
.slider-content {
	color: #000;
}

.card-name {
	font-size: 14px;
	text-align: center;
}
.card-id {
	flex: 1;
	font-size: 10px;
	text-align: center;
}
.card-type {
	flex: 1;
	display: flex;
	flex-direction: column;

	font-size: 12px;
	text-align: center;
}
.type--Colorless {
	background-color: transparent;
	color: black;
	border-radius: 20%;
	padding: 2px;
}
.type--Darkness {
	background-color: black;
	color: white;
	border-radius: 20%;
	padding: 2px;
}
.type--Dragon {
	background-color: indigo;
	color: white;
	border-radius: 20%;
	padding: 2px;
}
.type--Fairy {
	background-color: darkcyan;
	color: white;
	border-radius: 20%;
	padding: 2px;
}
.type--Fighting {
	background-color: salmon;
	color: black;
	border-radius: 20%;
	padding: 2px;
}
.type--Fire {
	background-color: red;
	color: white;
	border-radius: 20%;
	padding: 2px;
}
.type--Grass {
	background-color: green;
	color: white;
	border-radius: 20%;
	padding: 2px;
}
.type--Lightning {
	background-color: yellow;
	color: black;
	border-radius: 20%;
	padding: 2px;
}
.type--Metal {
	background-color: silver;
	color: black;
	border-radius: 20%;
	padding: 2px;
}
.type--Psychic {
	background-color: grey;
	color: black;
	border-radius: 20%;
	padding: 2px;
}
.type--Water {
	background-color: blue;
	color: white;
	border-radius: 20%;
	padding: 2px;
}

.card-index {
	position: absolute;

	font-size: 11px;
	text-align: center;

	bottom: 1%;
	left: 0;
	right: 0;
}
</style>
