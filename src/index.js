import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store'

import './index.css'

const renderApplication = () => {
	console.info('[renderApplication] store=', store.getState())
	ReactDOM.render(<App />, document.getElementById('root'))
}

renderApplication()
registerServiceWorker()

store.subscribe(renderApplication)
