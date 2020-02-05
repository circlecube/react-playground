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
	state = {
		questionAnswers: [],
		score: {
			correct: 0,
			total: 0
		}
	};

	static async getInitialProps() {
		// Make request for posts.
		const response = await axios.get( 'https://circlecube.com/uspresidents/wp-json/wp/v2/president?per_page=50&order=asc&orderby=meta_value_num&meta_key=took_office' );
		return {
			posts: response.data
		}
	}

	componentDidMount() {
		this.makeQuizQuestion();
	}

	randomNumbers = (max, length) => {
		var arr = [];
		while(arr.length < length){
			var r = Math.floor(Math.random() * max);
			if(arr.indexOf(r) === -1) arr.push(r);
		}
		return arr;
	}

	makeQuizQuestion = () => {
		this.setState((state, props) => ({
			questionAnswers: this.randomPresidents(props.posts),
			questionAnswer: this.randomNumbers(4, 1),
		}));
	}

	handleCardClick = (correct) => {
		this.setState((state, props) => ({
			score: {
				correct: state.score.correct + correct,
				total: state.score.total + 1,
			}
		}));
		if ( correct ) {
			this.makeQuizQuestion();
		}
	}

	randomPresidents = (posts) => {
		const randomFour = [];
		const numPresidents = posts.length;
		const randomIndexes = this.randomNumbers(numPresidents, 4);
		randomFour.push(posts[randomIndexes[0]]);
		randomFour.push(posts[randomIndexes[1]]);
		randomFour.push(posts[randomIndexes[2]]);
		randomFour.push(posts[randomIndexes[3]]);
		return randomFour;
	}

	render (){
		return (
			<>
				<Navigation />
				<h1>Quiz</h1>
				<button onClick={this.makeQuizQuestion}>New Question</button>

				<h2>
					{ this.state.questionAnswers && this.state.questionAnswer && 
		`Who is ${this.state.questionAnswers[this.state.questionAnswer[0]].title.rendered}?`	
					}
				</h2>
				<PresidentList>
				{
					this.state.questionAnswers.map( (post, i) => {
						return (
							<PresidentCard 
								post={ post }
								index={ i }
								correct={ i === this.state.questionAnswer[0] }
								key={ post.slug }
								clickCallback={ this.handleCardClick }
							/>
						)
					})
				}
				</PresidentList>
				{this.state.score.total &&
				`${ this.state.score.correct } of ${ this.state.score.total } : 
				${ this.state.score.correct / this.state.score.total * 100 }%`
	}
			</>
		)
	}
}