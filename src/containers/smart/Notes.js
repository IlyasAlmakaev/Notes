import React, { Component } from 'react';
import PropTypes from 'prop-types';

var notesComponents = [
	{
		noteText: 'Саша Печкин'
	},
	{
		noteText: 'Просто Вася'
	},
	{
		noteText: 'Гость'
	}
]

class Note extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        noteText: PropTypes.string.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        noteText: PropTypes.string.isRequired
      })),
    ]).isRequired 
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
    <div className='note'>
    <h3>{this.state.noteText}</h3>
    <label className='add__checkrule'>
        <input type='checkbox' ref='checkrule' onChange={this.onCheckComplite} />Выполнено
    </label>
    <button
      className='add__btn'
      onClick={this.onDeleteNoteBtnClickHandler}
      ref='alert_button'>
      Удалить заметку
    </button>
    </div>)
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
    <div>
    {notesTemplate}
    </div>)
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
        <NotesList data={notesComponents} />
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