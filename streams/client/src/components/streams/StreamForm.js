import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
	renderInput = (formProps) => {
		const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{formProps.label}
					<input {...formProps.input } />
				</label>
				{this.renderError(formProps.meta)}
			</div>
		);
	}
	renderError(meta) {
		if ( meta.touched && meta.error ) {
			return (
				<div className="ui error message">
					<div className="header">{meta.error}</div>
				</div>
			);
		}
	}
	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	}
	render() {
		const className = `ui form ${!this.props.valid ? 'error' : ''}`;
		return (
			<form className={className} onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Stream Title" />
				<Field name="description" component={this.renderInput} label="Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if ( !formValues.title ) {
		errors.title = 'You must enter a steram title';
	}
	if ( !formValues.description ) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'StreamForm',
	validate: validate
})(StreamForm);