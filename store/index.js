export const strict = false

const checkIfMobile = (context) => {
	const mobile = false
	return mobile
}

export const state = () => ({
	isMobile: false,
	isDense: false,
	generalMinimized: false,
	dialogOpen: false,
})
export const getters = {
	isMobile: (state) => state.isMobile,
}

export const mutations = {
	SET_MOBILE(state, isMobile) {
		state.isMobile = isMobile
	},
}

export const actions = {
	nuxtServerInit({ commit }, context) {
		commit('SET_MOBILE', checkIfMobile(context))
	},
}
