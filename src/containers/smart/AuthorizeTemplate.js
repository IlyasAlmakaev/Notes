import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

		fetch(this.props.apiUrl, {  
			method: 'post',  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: JSON.stringify(user)  
		}).then(res => {
			if (res.status === 200 && res.ok === true) {
				this.props.history.push('/notes');
			}

			//TODO: отправка токена/id пользователя в "Notes" c помощью Redux-Thunk
			console.log(res.json());
		})		
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