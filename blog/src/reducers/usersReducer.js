export default ( state = [], action) => {
	console.log( 'user reducer', state, action );
	switch (action.type) {
		case 'PREFETCH_USER':
			// load in a placeholder object for the user to let app know is has been requested
			// skip on if the id already has a placeholder object
			if ( state.filter(user => user.id === action.payload.id && 'loading' === user.status).length > 0 ) {
				console.log( 'user already prefetching');
				return state;
			}
			// if not already loading, add to the state and return
			return [...state, action.payload ];
		case 'FETCH_USER':
			// return [...state, action.payload ];
			// replace the placeholder object with the returned object
			if ( state.filter(user => user.id === action.payload.id && 'loading' === user.status).length > 0 ) {
				return [...state.filter(user => user.id !== action.payload.id), action.payload];
			}
			return [...state, action.payload ];
		default:
			return state;
	}
}