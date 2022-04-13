<template>
	<main>
		<Header></Header>
		<CardsMobile v-show="isMobile" :cards="cards"></CardsMobile>
		<CardsDesktop v-show="!isMobile"></CardsDesktop>
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
import Header from '~/components/Header.vue'
import CardsMobile from '~/components/CardsMobile.vue'
import CardsDesktop from '~/components/CardsDesktop.vue'

export default {
	components: {
		Header,
		CardsMobile,
		CardsDesktop,
	},
	name: 'IndexPage',
	data: () => ({
		isMobile: false,
		cards: [],
	}),
	beforeDestroy() {
		if (typeof window === 'undefined') return
		window.removeEventListener('resize', this.onResize, { passive: true })
	},

	async mounted() {
		this.onResize()
		window.addEventListener('resize', this.onResize, { passive: true })
	},

	methods: {
		onResize() {
			this.isMobile = window.innerWidth < 600
		},
	},
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
}
html,
body {
	height: auto;

	font-family: 'Nunito', sans-serif;

	margin: 0;
	background-color: #fb1b1b;
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
	font-weight: bold;
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
	font-weight: bold;
	text-align: center;
}
.type--Colorless {
	background-color: transparent;
	color: black;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Darkness {
	background-color: black;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Dragon {
	background-color: indigo;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
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
	margin: 2px;
}
.type--Fire {
	background-color: red;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Grass {
	background-color: green;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Lightning {
	background-color: yellow;
	color: black;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Metal {
	background-color: silver;
	color: black;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Psychic {
	background-color: grey;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}
.type--Water {
	background-color: blue;
	color: white;
	border-radius: 20%;
	padding: 2px;
	margin: 2px;
}

.card-index {
	position: absolute;

	font-size: 11px;
	text-align: center;

	bottom: 1%;
	left: 0;
	right: 0;
}

@media (min-width: 600px) {
	.card-name {
		font-size: 16px;
	}
	.card-id {
		font-size: 16px;
	}
}
</style>
