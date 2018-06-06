import { combineReducers } from 'redux'

import { mainReducer as activeUserId } from './activeUserId'
import { mainReducer as contacts } from './contact'
import { mainReducer as user } from './user'

const mainReducer = combineReducers({
	activeUserId,
	contacts,
	user
})

export { mainReducer }
