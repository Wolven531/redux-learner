import React from 'react'
import PropTypes from 'prop-types'

import { setActiveUserId } from '../actions'
import { store } from '../store'

import './user.css'

const User = ({ user }) => {
	this.userClicked = userId => store.dispatch(setActiveUserId(userId))

	const { name, profilePic, status, userId } = user
	return <div className="user" onClick={() => this.userClicked(userId)}>
		<img src={profilePic} alt={name} className="profile-picture" />
		<div className="details">
			<p className="name">{name}</p>
			<p className="status">{status}</p>
		</div>
	</div>
}

User.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string,
		profilePic: PropTypes.string,
		status: PropTypes.string,
	}).isRequired
}

export { User }
