/** Request
 * 
 *  Send a message to front!
 * 
 */

const API = {
	INCOMING_MESSAGE: 'https://padlet.api.frontapp.com/channels/cha_4ikcv/incoming_messages'
}

const body = {
	sender: {
		contact_id: '123',
		name: 'Colin',
		handle: 'asdfh2lk3bnmqsn123'
	},
	subject: 'Mobile Application - Testing',
	body: 'This is a test message that was sent from the new widget'
}

const options = {
  method: 'POST',
  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
  body: JSON.stringify(body)
};


export const senRequestToFront = () => {
	fetch(API.INCOMING_MESSAGE, options)
	.then(response => console.log(response))
	.catch(err => console.error(err));
}