import _ from 'lodash' // lodash is a utility lib for Javascript
import faker from 'faker' // faker is used for generating random fake data.
import shortid from 'shortid' // shortid.generate() returns a unique 'short' id
import * as txtgen from 'txtgen' // txtgen.sentence() returns random 'readable' sentences

const users = generateUsers(10)
const contacts = _.mapKeys(users, 'userId')

const getMessages = messagesPerUser => {
	let messages = {}
	_.forEach(users, user => {
		messages[user.userId] = {
			..._.mapKeys(generateMsgs(messagesPerUser), 'number')
		}
	})
	return messages
}

// just an example of how the state object is structured
const state = {
	user: generateUser(),
	messages: getMessages(10),
	typing: '',
	contacts,
	activeUserId: null
}

/**
 * @returns {Object} - a new user object
 */
function generateUser() {
	return {
		name: faker.name.findName(),
		email: faker.internet.email(),
		profilePic: faker.internet.avatar(),
		status: txtgen.sentence(),
		userId: shortid.generate()
	}
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
	return {
		number,
		text: txtgen.sentence(),
		is_user_msg: faker.random.boolean()
	}
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
	return Array.from({ length: numberOfUsers }, () => generateUser())
}

function generateMsgs(numberOfMsgs) {
	return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i))
}

export { contacts, getMessages, state, generateUser }
