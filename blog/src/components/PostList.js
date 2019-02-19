import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
	componentDidMount(){
		this.props.fetchPosts();
	}
	renderList(){
		return this.props.posts.map(post => {
			return(
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title.rendered}</h2>
							<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
						</div>
						<UserHeader userId={post.author} />
					</div>
				</div>
			)
		})
	}
	render(){
		console.log(this.props.posts);
		return (
			<div className="ui relaxed divided list">
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, {
	fetchPosts: fetchPosts
})(PostList);