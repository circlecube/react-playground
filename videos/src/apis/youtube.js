import axios from 'axios';

const KEY = 'AIzaSyCGlPaxoDLSHZlICrd-BV_fMm99KsXtWxY';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
