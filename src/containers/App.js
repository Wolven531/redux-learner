import React, { Component, Fragment } from 'react'

import _ from 'lodash'
import { Sidebar } from '../components/Sidebar'
import { MainPanel } from '../components/MainPanel'
// import { ButtonGroup } from './ButtonGroup'
// import { HelloWorld } from './HelloWorld'
// import { TECHNOLOGIES, store } from './store'
import { store } from '../store'

import './app.css'

class App extends Component {
	render() {
		const { activeUserId, contacts, user } = store.getState()
		return true &&
			<Fragment>
				{/*
				<HelloWorld tech={store.getState().tech} />
				<ButtonGroup datasetName="tech" displayItems={TECHNOLOGIES} />
				*/}
				<div className="app">
					<Sidebar contacts={_.values(contacts)} />
					<MainPanel activeUserId={activeUserId} user={user} />
				</div>
			</Fragment>
	}
}

export { App }
