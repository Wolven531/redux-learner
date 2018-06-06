import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../containers/User'

import './sidebar.css'

const Sidebar = ({ contacts }) => true&&
	<aside className="sidebar">
		{contacts.map((contact, ind) =>
			<User user={contact} key={ind} />
		)}
	</aside>

Sidebar.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			profilePic: PropTypes.string,
			status: PropTypes.string,
		})
	).isRequired
}

export { Sidebar }
