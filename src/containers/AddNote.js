import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux';
import { request } from './ModuleHttp';
import { addTask } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
        id: state.task.present.id,
        task: state.task.present.task,
        error: state.task.present.error,
        canUndo: state.task.past.length > 0,
        canRedo: state.task.future.length > 0
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        addTaskFromForm: (id, data) => dispatch(addTask(id, data)),
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
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
        this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);
    }

    componentWillReceiveProps(props) {	
		if (props.task) {
			this.props.history.push('/notes');
		} else {
            alert("Ошибка при добавлении заметки")
        }
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
        this.props.history.push('/notes');
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
      <button
              className='add__btn'
              onClick={this.onUndo}
              ref='alert_button'>
              Отменить
      </button>
      <button
              className='add__btn'
              onClick={this.onRedo}
              ref='alert_button'>
              Повторить
      </button>
    </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);