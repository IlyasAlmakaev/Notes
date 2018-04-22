import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var users = [];

export default class Registration extends Component {

	constructor(props) {
		super(props);
		this.state = {loginIsEmpty: true,
					  passwordIsEmpty: true};
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);			  
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.login).focus();
	}
	onBtnClickHandler(e) {
		e.preventDefault();

		//let loginField = ReactDOM.findDOMNode(this.refs.login);
		//let passwordField = ReactDOM.findDOMNode(this.refs.password);
		let login = ReactDOM.findDOMNode(this.refs.login).value;
		let password = ReactDOM.findDOMNode(this.refs.password).value;

		let user = {
			login: login,
			password: password
		};

		users.push(user);

		//loginField.value = '';
		//passwordField.value = '';

		console.log(users);
		this.props.history.push('/notes');
	}
	onFieldChange(fieldName, e) {
		if (e.target.value.trim().length > 0) {
			this.setState({[''+fieldName]: false})
		} else {
			this.setState({[''+fieldName]: true})
		}
	}

  render() {

    var loginIsEmpty = this.state.loginIsEmpty,
      passwordIsEmpty = this.state.passwordIsEmpty;

    return (
      <form className='add cf'>
				<input
					type='text'
					className='login'
					onChange={this.onFieldChange.bind(this, 'loginIsEmpty')}
					placeholder='Логин'
					ref='login'
				/>
				<input
					type='text'
					className='password'
					onChange={this.onFieldChange.bind(this, 'passwordIsEmpty')}
					placeholder='Пароль'
					ref='password'
				/>
				<button
								className='add__btn'
								onClick={this.onBtnClickHandler}
								ref='alert_button'
								disabled={loginIsEmpty || passwordIsEmpty}>
								Зарегистрироваться
				</button>
			</form>
    );
  }
}