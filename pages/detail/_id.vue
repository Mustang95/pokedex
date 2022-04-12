<template>
	<div>detalhe</div>
</template>

<script>
import serverAxios from '@/api/axios/serverAxios'
// import { ROUTES } from "@/api/connection.js";
import { ROUTES, getPathWithId } from '@/api/connection'
export default {
	data() {
		return {
			card: [],
		}
	},
	async asyncData({ params }) {
		const card = await serverAxios.get(
			getPathWithId(ROUTES.api.cardById, params.id)
		).data
	},

	mounted() {
		console.log($router.params.card)
	},
}
</script>

<style scoped>
div {
	width: 100%;
	height: 100%;
}
</style>
