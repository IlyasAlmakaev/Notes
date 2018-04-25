import React, { Component } from 'react';
import AuthorizeTemplate from '../smart/AuthorizeTemplate';

const API_LOGIN_URL = 'api/Users/login';

export default class Authorization extends Component {

  render() {

    return (
		<AuthorizeTemplate navigateAddress={'/registration'} 
		apiUrl={API_LOGIN_URL}
		firstNameButton={'Авторизироваться'}
		secondNameButton={'На регистрацию'} 
		history={this.props.history} />
    );
  }
}