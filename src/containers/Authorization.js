import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_LOGIN_URL = 'api/Users/login';

export default class Authorization extends Component {

	constructor(props) {
		super(props);
		this.state = {emailIsEmpty: true,
					  passwordIsEmpty: true};
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
		this.onBtnRegistrationClickHandler = this.onBtnRegistrationClickHandler.bind(this);
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

		fetch(API_LOGIN_URL, {  
			method: 'post',  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: JSON.stringify(user) 
		}).then((res) => {
			if (res.status === 200 && res.ok === true) {
				this.props.history.push('/notes');
			}

			//TODO: отправка токена/id пользователя в "Notes" c помощью Redux-Thunk
			console.log(res.json());
		})
	}

	onBtnRegistrationClickHandler(e) {
		e.preventDefault();

		this.props.history.push('/registration');
	}

	onFieldChange(fieldName, e) {
		this.setState({[fieldName]: !e.target.value.trim().length});
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
								Авторизоваться
				</button>
				<button
								className='add__btn'
								onClick={this.onBtnRegistrationClickHandler}
								ref='alert_button'>
								На регистрацию
				</button>
			</form>
    );
  }
}