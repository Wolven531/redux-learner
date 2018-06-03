import { ACTIONS } from '../actions'

const mainReducer = (state, action) => {
	const type = action.type

	if (type.startsWith(ACTIONS.REDUX_INIT)) {
		return state
	}

	console.info(`[mainReducer] action.type="${type}"`)

	switch (type) {
	case ACTIONS.SET_TECHNOLOGY:
		const newTech = action.tech
		console.info(`[mainReducer] action.tech="${newTech}"`)
		return {
			...state,
			tech: newTech
		}
	default:
		console.warn(`[mainReducer] Could not match action type "${type}"`)
		break
	}

	return state
}

export { mainReducer }
