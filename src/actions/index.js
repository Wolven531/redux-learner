const ACTIONS = {
	SET_TECHNOLOGY: 'set_technology',
	REDUX_INIT: '@@redux'
}

const setTechnology = technology => ({
	type: ACTIONS.SET_TECHNOLOGY,
	tech: technology
})

export { ACTIONS, setTechnology }
