import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store'

import './index.css'

const renderApplication = () => ReactDOM.render(<App />, document.getElementById('root'))

renderApplication()
registerServiceWorker()

store.subscribe(renderApplication)
