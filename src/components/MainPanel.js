import React from 'react'
import PropTypes from 'prop-types'

import { Empty } from './Empty'
import { ChatWindow } from '../containers/ChatWindow'

import './main-panel.css'

const MainPanel = ({ activeUserId, user }) =>
	<main className="main-panel">
		{
			activeUserId ?
				<ChatWindow activeUserId={activeUserId} />
				:
				<Empty activeUserId={activeUserId} user={user} />
		}
	</main>

MainPanel.propTypes = {
	activeUserId: PropTypes.string,
	user: PropTypes.shape({
		name: PropTypes.string,
		profilePic: PropTypes.string,
		status: PropTypes.string,
	}).isRequired
}

export { MainPanel }
