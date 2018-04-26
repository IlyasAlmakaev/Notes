import React, { Component } from 'react';

export default class Notes extends Component {

  onAddNoteBtnClickHandler(e) {
		e.preventDefault();

	}
  onDeleteNoteBtnClickHandler(e) {
		e.preventDefault();

  }
  onCheckComplite(e) {
	//	e.preventDefault();

	}

  render() {
    return (
      <form className='notes'>
        <h1>Заметки</h1>
        <form className='note'>
          <h3>Первая заметка</h3>
          <label className='add__checkrule'>
							<input type='checkbox' defaultCheked={false} ref='checkrule' onChange={this.onCheckComplite} />Выполнено
				  </label>
          <button
              className='add__btn'
              onClick={this.onDeleteNoteBtnClickHandler}
              ref='alert_button'>
              Удалить заметку
          </button>
			  </form>
        <button
          className='add__btn'
          onClick={this.onAddNoteBtnClickHandler}
          ref='alert_button'>
          Создать заметку
        </button>
      </form>
    );
  }
}