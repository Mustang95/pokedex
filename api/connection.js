const apiConfiguration = require('./api.conf.json')

export const ROOT_PATH =
	process.env.NODE_ENV === 'development'
		? apiConfiguration.serverPath.development
		: apiConfiguration.serverPath.production

export const ROUTES = {
	api: {
		// REST API REQUESTS
		// sites: 'db/sites'
		cards: '/cards',
		cardById: { path: '/cards/', id: '' },
	},
}

export const getFullPath = function (path) {
	return `${apiConfiguration.serverPath.development}/${path}`
}

// Returns a path with id in between
export const getPathWithId = function (route, id) {
	debugger
	return `${route.path}${id}`
}
