import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AuthorizeTemplate from './AuthorizeTemplate';

const API_REGISTRATION_URL = 'api/Users';

export default class Registration extends Component {

  render() {

    return (
	  <AuthorizeTemplate navigateAddress={'/'} 
						   apiUrl={ API_REGISTRATION_URL }
						   firstNameButton={'Зарегистрироваться'}
						   secondNameButton={'На авторизацию'} 
						   history={this.props.history} />
    );
  }
}