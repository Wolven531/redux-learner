import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { setTechnology } from './actions'
import { store } from './store'

const dispatchSetTechnologyAction = (evt) => {
	if (!evt || !evt.target) {
		console.warn('[ButtonGroup] Unable to dispatch action, evt was missing information')
		return
	}
	store.dispatch(setTechnology(evt.target.dataset.tech))
}

const getDataset = (datasetName, item) => {
	const dataset = {}
	dataset[`data-${datasetName}`] = item
	return dataset
}

const ButtonGroup = ({ displayItems, datasetName }) => {
	const itemMapper = (item, ind) => true &&
		<button key={ind} className="btn" {...getDataset(datasetName, item)}
			onClick={dispatchSetTechnologyAction}>
			{item}
		</button>

	return true &&
		<Fragment>
			{displayItems.map(itemMapper)}
		</Fragment>
}

ButtonGroup.propTypes = {
	datasetName: PropTypes.string,
	displayItems: PropTypes.arrayOf(PropTypes.string)
}

export { ButtonGroup }
