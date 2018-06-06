import { REDUX_INIT, SET_TECHNOLOGY } from '../constants/action-types'

const mainReducer = (state, action) => {
	const type = action.type
	const payload = action.payload

	if (type.startsWith(REDUX_INIT)) {
		// console.info(`[reducer][technology] redux starter ${action.type}`)
		return state
	}

	// console.info(`[reducer][technology] action.type="${type}"`)

	switch (type) {
	case SET_TECHNOLOGY:
		// console.info(`[reducer][technology] tech="${payload}"`)
		return {
			...state,
			tech: payload
		}
	default:
		// console.warn(`[reducer][technology] Could not match action type "${type}"`)
		break
	}

	return state
}

export { mainReducer }
