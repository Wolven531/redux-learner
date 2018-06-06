import { REDUX_INIT } from '../constants/action-types'
import { contacts } from '../components/static-data'

const mainReducer = (state = contacts, action) => {
	const type = action.type
	// const payload = action.payload

	if (type.startsWith(REDUX_INIT)) {
		// console.info(`[reducer][contact] redux starter ${action.type}`)
		return state
	}

	// console.info(`[reducer][contact] action.type="${type}"`)

	switch (type) {
	default:
		// console.warn(`[reducer][contact] Could not match action type "${type}"`)
		break
	}

	return state
}

export { mainReducer }
