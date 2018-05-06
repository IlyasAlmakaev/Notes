import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { request } from './ModuleHttp';
import { addTask } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
        id: state.task.id,
        task: state.task.task,
		error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    addTaskFromForm: (id, data) => dispatch(addTask(id, data))
	};
};

class AddNote extends Component {

    static propTypes = {
        id: PropTypes.string,
        addTaskFromForm: PropTypes.func.isRequired,
        task: PropTypes.object.isRequired,
        error: PropTypes.string.isRequired
     }

    constructor(props) {
		super(props);
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);  
    }

    onBtnClickHandler(e) {
		e.preventDefault();

        let data = {
            title: this.refs.titleNote.value,
            body: this.refs.bodyNote.value
              };
          // TODO: переправить на нужную страницу
          this.props.addTaskFromForm(this.props.id, data)
	}

	onBtnCloseClickHandler(e) {
		e.preventDefault();
    let isClosed = window.confirm('Закрыть без сохранения?');

    if (isClosed) {
      console.log('clll');
    } else {
      console.log('notcll');
    }
	}

  render() {

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        placeholder='Заголовок'
        ref='titleNote'
       // value={this.state.value}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
						ref='bodyNote'
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnClickHandler}
              ref='alert_button'>
              Добавить заметку
      </button>
      <button
              className='add__btn'
              onClick={this.onBtnCloseClickHandler}
              ref='alert_button'>
              Закрыть
      </button>
    </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);