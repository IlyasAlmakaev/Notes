import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      noteText: PropTypes.string.isRequired
    })).isRequired,
 }

  static defaultProps = {
    data: []
  }
  
  constructor(props) {
		super(props);
		this.state = {noteText: this.props.data.noteText};
			  
	}
  onDeleteNoteBtnClickHandler(e) {
		e.preventDefault();

  }
  onCheckComplite(e) {
	//	e.preventDefault();

  }

  render() {

    return (
    <form className='note'>
    <h3>{this.state.noteText}</h3>
    <label className='add__checkrule'>
        <input type='checkbox' defaultCheked={false} ref='checkrule' onChange={this.onCheckComplite} />Выполнено
    </label>
    <button
      className='add__btn'
      onClick={this.onDeleteNoteBtnClickHandler}
      ref='alert_button'>
      Удалить заметку
    </button>
    </form>)
  }
}

class NotesList extends Component {

  render() {

    let data = this.props.data;
		let notesTemplate;

		if (data.length > 0) {
			notesTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Note data={item} />
					</div>
				)
			})
		} else {
			notesTemplate = <p>Заметок нет</p>
		}

    return (
    <form className='note'>
    {notesTemplate}
    </form>)
  }
}

export default class Notes extends Component {

  onAddNoteBtnClickHandler(e) {
		e.preventDefault();

	}

  render() {
    return (
      <form className='notes'>
        <h1>Заметки</h1>
        <Note />
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