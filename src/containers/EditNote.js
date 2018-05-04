import React, { Component } from 'react';
import {request} from './ModuleHttp';

export default class EditNote extends Component {

  onBtnClickHandler(e) {
		e.preventDefault();

	}

	onBtnGoClickHandler(e) {
		e.preventDefault();

	}

  render() {

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        placeholder='Заголовок'
        ref='email'
       // value={this.state.value}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
						ref='text'
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnClickHandler}
              ref='alert_button'>
              Редактировать
      </button>
      <button
              className='add__btn'
              onClick={this.onBtnGoClickHandler}
              ref='alert_button'>
              Закрыть
      </button>
    </form>
    );
  }
}