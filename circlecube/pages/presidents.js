import axios from 'axios'
import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import PresidentCard from '../components/PresidentCard';
import styled from 'styled-components';

const PresidentList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

export default class extends Component {

	static async getInitialProps() {
		// Make request for posts.
		// const response = await axios.get( 'https://circlecube.com/wp-json/wp/v2/posts')
		const response = await axios.get( 'https://circlecube.com/uspresidents/wp-json/wp/v2/president?per_page=50&order=asc&orderby=meta_value_num&meta_key=took_office' );
		// Return response to posts object in props.
		return {
			posts: response.data
		}
	}

	render (){
		return (
			<>
				<Navigation />
				<h1>Presidents</h1>
				<PresidentList>
				{
					this.props.posts.map( post => {
						return (
							<PresidentCard post={ post } key={ post.slug } />
						)
					})
				}
				</PresidentList>
			</>
		)
	}
}