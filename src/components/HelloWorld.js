import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ tech }) => {
	return (
		<div className="hello-world">
			Hello World <span className="hello-world__tech">{tech}!</span>
		</div>
	)
}

HelloWorld.propTypes = {
	tech: PropTypes.string.isRequired
}

export { HelloWorld }
