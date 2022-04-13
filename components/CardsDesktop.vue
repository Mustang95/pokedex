<template lang="">
<div
					class="grid-cards"
>

  <div
					v-for="(card, index) in cards.data"
					:key="card.id"
				>
					<div class="grid-content">
						<div class="card-name">
							<div style="display: flex">
								<div class="tiny-circles-red"></div>
								<div class="tiny-circles-red"></div>
							</div>
							{{ card.name }}
						</div>
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
					</div>
  </div>
</div>

</template>
<script>
import serverAxios from '../api/axios/serverAxios'
import { ROUTES } from '../api/connection.js'
export default {
	data() {
		return {
			cards: [],
		}
	},
	async mounted() {
		this.cards = await serverAxios.get(ROUTES.api.cards)
		this.cards = this.cards.data
	},
}
</script>
<style>
.grid-cards {
	width: fit-content;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.grid-content {
	background-color: white;

	border-radius: 5%;

	padding: 0.5rem;
	margin: 1.5rem;

	cursor: pointer;
}
</style>
