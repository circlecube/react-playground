import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Smells Like Teen Spirit', duration: '4:29' },
		{ title: 'Jeremy', duration: '4:16' },
		{ title: 'Black Hole Sun', duration: '3:12' },
		{ title: 'Hero of the Day', duration: '5:03' },
	];
};

const SelectedSongReducer = (selectedSong = null, action) => {
	if ( action.type === 'SONG_SELECTED' ) {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: SelectedSongReducer
});