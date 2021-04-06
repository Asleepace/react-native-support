/** Request
 * 
 *  Send a message to front!
 * 
 */

export const senRequestToFront = () => fetch('https://padlet.api.frontapp.com/channels/cha_4ikcv/incoming_messages', {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		sender: {
			contact_id: '123',
			handle: 'abcdefg',
			name: 'colin',
		},
		subject: 'Mobile Application - Testing',
		body: 'This is a test message that was sent from the new widget'
	})
})
.then(response => console.log(response))
.catch(err => console.error(err))
