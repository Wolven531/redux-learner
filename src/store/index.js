import { createStore } from 'redux'
import { mainReducer } from '../reducers'

const TECHNOLOGIES = [
	'Angular',
	'React',
	'Redux'
]
const initialState = {
	tech: TECHNOLOGIES[0]
}
const store = createStore(mainReducer, initialState)

export { TECHNOLOGIES, store }
