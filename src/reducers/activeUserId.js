import {
	REDUX_INIT,
	SET_ACTIVE_USER_ID
} from '../constants/action-types'

const mainReducer = (state = null, action) => {
	const type = action.type
	const payload = action.payload

	if (type.startsWith(REDUX_INIT)) {
		// console.info(`[reducer][activeUserId] redux starter ${action.type}`)
		return state
	}

	// console.info(`[reducer][activeUserId] action.type="${type}"`)

	switch (type) {
	case SET_ACTIVE_USER_ID:
		// console.log(`[reducer][activeUserId] activeUserId = ${payload}`)
		return payload
	default:
		console.warn(`[reducer][activeUserId] Could not match action type "${type}"`)
		break
	}

	return state
}

export { mainReducer }
