import {
	SET_ACTIVE_USER_ID,
	SET_TECHNOLOGY
} from '../constants/action-types'

const setActiveUserId = id => ({
	type: SET_ACTIVE_USER_ID,
	payload: id
})

const setTechnology = technology => ({
	type: SET_TECHNOLOGY,
	payload: technology
})

export { setActiveUserId, setTechnology }
