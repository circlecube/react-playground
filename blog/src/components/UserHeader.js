import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		if ( this.props.users )
		this.props.fetchUser(this.props.userId);
	}

	render() {
		console.log( this.props.user );

		if ( !this.props.user) {
			return null;
		}
		return (
			<div>
				{this.props.user.name}
			</div>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users,
		user: state.users.find(
			user => 
				user.id === ownProps.userId )
	};
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);