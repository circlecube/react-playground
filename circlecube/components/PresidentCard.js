import React, { Component } from 'react'
// import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.li`
	height: 150px;
	position: relative;
	width: 150px;
	
	p {
		background-color: rgba(50,50,250,.5);
		bottom: 10px;
		box-sizing: border-box;
		color: white;
		display: block;
		left: 0;
		margin: 0;
		padding: 10px;
		opacity: 0;
		position: absolute;
		text-align: center;
		text-decoration: none;
		transition: .2s all ease;
		width: 100%;
	}
	
	&[data-clicked="true"] {
		p {
			background-color: rgba(50,50,250,.75);
			opacity: 1;
		}
	}
`;

const CardImg = styled.img`
	object-fit: cover;
`;


export default class extends Component {
	state = {
		clicked: false,
	};

	clickPresident = () => {

		this.setState({
			clicked: true,
		});

		this.props.clickCallback( this.props.correct );
	}

	render () {
		return (
			<Card
				onClick={ this.clickPresident }
				data-clicked={ this.state.clicked }
			>
				{/* <Link href={ `/posts/${ this.props.post.slug }` }> */}
					{/* <a> */}
						<CardImg 
							src={ this.props.post.acf.portrait[0].sizes.thumbnail } 
							alt={ this.props.post.title.rendered } 
						/>
						<p>
							{ this.props.post.title.rendered }
						</p>
					{/* </a> */}
				{/* </Link> */}
			</Card>
		)
	}
}