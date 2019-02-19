import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
	render() {
		if (this.props.song) {
			return(
				<div class="song-detail">
					<div class="song-title">{this.props.song.title}</div>
					<div class="song-duration">{this.props.song.duration}</div>
				</div>
			);
		}
		else {
			return (
				<div class="song-detail">
					<div class="song-title">No song selected</div>
				</div>
			)
		}
	}
}


const mapStateToProps = (state) => {
	return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);

