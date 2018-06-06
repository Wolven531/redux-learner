import React from 'react'
import PropTypes from 'prop-types'

import './empty.css'

const isPrefix = (target) => ['mr.', 'ms.', 'mrs.'].indexOf(String(target).toLowerCase()) > -1

const getFirstName = (fullName) => {
	const nameParts = fullName.split(' ')
	let partAttempt = 0
	let firstName = nameParts[partAttempt]

	while (isPrefix(firstName) && partAttempt < nameParts.length - 1) {
		firstName = nameParts[partAttempt]
		partAttempt++
	}
	return firstName
}

const Empty = ({ user }) => {
	const { name, profilePic, status } = user
	const firstName = getFirstName(name)

	return true &&
		<div className="empty">
			<h2 className="name">Welcome, {firstName}</h2>
			<img src={profilePic} alt={name} className="profile-picture" />
			<h3>Status</h3>
			<div className="status">
				{status}
			</div>
			<button className="start-btn">Start a conversation!</button>
			<p className="info">Search for someone to start chatting with or go to `Contacts` to see who is available</p>
		</div>
}

Empty.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string,
		profilePic: PropTypes.string,
		status: PropTypes.string,
	}).isRequired
}

export { Empty }
