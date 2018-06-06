import { createStore } from 'redux'
import { mainReducer } from '../reducers'
// import { contacts } from '../components/static-data'

const TECHNOLOGIES = [
	'Angular',
	'React',
	'Redux'
]
// const initialState = {
// // 	tech: TECHNOLOGIES[0]
// 	contacts: contacts
// }
// const store = createStore(mainReducer, initialState)
const store = createStore(mainReducer)

export { TECHNOLOGIES, store }
