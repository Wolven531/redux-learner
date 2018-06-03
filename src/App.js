import React, { Component, Fragment } from 'react'

import { ButtonGroup } from './ButtonGroup'
import { HelloWorld } from './HelloWorld'
import { TECHNOLOGIES, store } from './store'

class App extends Component {
	render() {
		return true &&
			<Fragment>
				<React.Fragment />
				<HelloWorld tech={store.getState().tech} />
				<ButtonGroup datasetName="tech" displayItems={TECHNOLOGIES} />
			</Fragment>
	}
}

export { App }
