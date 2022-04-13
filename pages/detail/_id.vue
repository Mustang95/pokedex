<template>
	<div>
		<img :src="`${this.detail.images.large}`" />
	</div>
</template>

<script>
import serverAxios from '@/api/axios/serverAxios'
import { ROUTES, getPathWithId } from '@/api/connection'
export default {
	data() {
		return {
			detail: null,
		}
	},
	async asyncData({ params }) {
		const detail = (
			await serverAxios.get(getPathWithId(ROUTES.api.cardById, params.id))
		).data.data
		return {
			detail,
		}
	},
}
</script>

<style scoped>
div {
	width: 100%;
	height: 100%;
}
</style>
