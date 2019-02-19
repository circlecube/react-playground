import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
		'Client-ID 9765e72e984fb307474f7ee187623a33cb4c0843dd1911c872cabfff2a67b3fc'
	}
})
