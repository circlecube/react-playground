import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>one</div>
				<div>two</div>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName()}
					timeAgo="Today at 4:45PM"
					commentText={faker.lorem.sentence()} 
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author={faker.name.firstName()} timeAgo="Today at 3:55PM" commentText={faker.lorem.sentence()} avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author={faker.name.firstName()} timeAgo="Yesterday at 8:45AM" commentText={faker.lorem.sentence()} avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author={faker.name.firstName()} timeAgo="Last Week at 6:45AM" commentText={faker.lorem.sentence()} avatar={faker.image.avatar()} />
			</ApprovalCard>
			
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));