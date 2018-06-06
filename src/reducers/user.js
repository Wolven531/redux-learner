import { REDUX_INIT } from '../constants/action-types'
import { generateUser } from '../components/static-data'

const mainReducer = (state = generateUser(), action) => {
	const type = action.type
	// const payload = action.payload

	if (type.startsWith(REDUX_INIT)) {
		// console.info(`[reducer][user] redux starter ${action.type}`)
		return state
	}

	// console.info(`[reducer][user] action.type="${type}"`)

	switch (type) {
	default:
		// console.warn(`[reducer][user] Could not match action type "${type}"`)
		break
	}

	return state
}

export { mainReducer }
