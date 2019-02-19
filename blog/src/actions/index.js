import wp from'../apis/wp';

export const fetchPosts = () => async (dispatch) => {
	const response = await wp.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response.data
	});
};

export const fetchUser = (id) => async (dispatch, getState) => {
	
	if ( getState().users.filter( user => user.id === id ).length > 0 ) {
		console.log('user already exists, skip getting');
	} else {
		
		// dispatch prefetch action
		dispatch({
			type: 'PREFETCH_USER',
			payload: {
				id: id,
				status: 'loading'
			}
		});

		// get user data
		const response = await wp.get(`/users/${id}`);

		// dispatch response
		dispatch({
			type: 'FETCH_USER',
			payload: response.data
		});
	}
};