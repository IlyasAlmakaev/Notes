import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {request} from './ModuleHttp';

export default class AuthorizeTemplate extends Component {

	constructor(props) {
		super(props);
		this.state = {emailIsEmpty: true,
					  passwordIsEmpty: true};
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
		this.onBtnGoClickHandler = this.onBtnGoClickHandler.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);			  
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.email).focus();
	}

	onBtnClickHandler(e) {
		e.preventDefault();

		let user = {
			email: this.refs.email.value,
			password: this.refs.password.value
		};

		request(this.props.apiUrl, user)
		.then(data => this.props.history.push('/notes'))
		.catch(error => alert(error));	
	}

	onBtnGoClickHandler(e) {
		e.preventDefault();

		this.props.history.push(this.props.navigateAddress);
	}

	onFieldChange(fieldName, e) {
		this.setState({[fieldName]: !e.target.value.trim().length})
	}

  render() {

    var emailIsEmpty = this.state.emailIsEmpty,
      passwordIsEmpty = this.state.passwordIsEmpty;

    return (
      <form className='add cf'>
				<input
					type='text'
					className='email'
					onChange={this.onFieldChange.bind(this, 'emailIsEmpty')}
					placeholder='Электронная почта'
					ref='email'
					value={this.state.value}
				/>
				<input
					type='text'
					className='password'
					onChange={this.onFieldChange.bind(this, 'passwordIsEmpty')}
					placeholder='Пароль'
					ref='password'
					value={this.state.value}
				/>
				<button
								className='add__btn'
								onClick={this.onBtnClickHandler}
								ref='alert_button'
								disabled={emailIsEmpty || passwordIsEmpty}>
								{this.props.firstNameButton}
				</button>
				<button
								className='add__btn'
								onClick={this.onBtnGoClickHandler}
								ref='alert_button'>
								{this.props.secondNameButton}
				</button>
			</form>
    );
  }
}