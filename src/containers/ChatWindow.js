import React from 'react'
import PropTypes from 'prop-types'

import './chat-window.css'

const ChatWindow = ({ activeUserId }) => {
	return true &&
		<div>
			Conversation for user with ID: {activeUserId}
		</div>
}

ChatWindow.propTypes = {
	activeUserId: PropTypes.string.isRequired
}

export { ChatWindow }
