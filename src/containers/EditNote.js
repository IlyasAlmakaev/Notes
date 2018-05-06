import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {request} from './ModuleHttp';
import { connect } from 'react-redux';
import { replaceTask } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
      editedTasks: state.task.taskData,
      id: state.task.id,
      replaceTask: state.task.task,
	    error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    replaceTaskFromForm: (id, taskID, data) => dispatch(replaceTask(id, taskID, data))
	};
};

export default class EditNote extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })),
    ]).isRequired,
    id: PropTypes.string,
    replaceTaskFromForm: PropTypes.func.isRequired,
    replaceTask: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

 constructor(props) {
  super(props);
this.state = {title: this.props.data.title,
  body: this.props.data.body,
  id: this.props.data.id};
  this.onBtnEditClickHandler = this.onBtnEditClickHandler.bind(this);
  this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);  
}

  static defaultProps = {
    data: []
}

  onBtnEditClickHandler(e) {
    e.preventDefault();
    
    let data = {
      title: this.refs.title.value,
      body: this.refs.body.value
		};

    this.props.replaceTaskFromForm(this.props.id, this.state.id, data)
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

    let self = this;
    console.log("tit" + self.state.title + "body" + self.state.body);

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        placeholder='Заголовок'
        ref='title'
        value={self.state.title}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
            ref='body'
            value={self.state.body}
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnEditClickHandler}
              ref='alert_button'>
              Редактировать
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