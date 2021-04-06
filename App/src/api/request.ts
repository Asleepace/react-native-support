


const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

const options = {
  method: 'POST',
  headers,
  body: JSON.stringify({options: {archive: false}})
};


export const senRequestToFront = (data: any) => {
	fetch('https://padlet.api.frontapp.com/channels/cha_4ikcv/incoming_messages', {
		method: 'POST',
		headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({options: {archive: false}})
	})
	.then(response => console.log(response))
	.catch(err => console.error(err));
}