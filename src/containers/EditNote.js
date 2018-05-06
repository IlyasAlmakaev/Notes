import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { request } from './ModuleHttp';
import { replaceTask } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
    data: state.task.data,
		error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    replaceTaskFromForm: (id, taskID, data) => dispatch(replaceTask(id, taskID, data))
	};
};

class EditNote extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired,
        userID: PropTypes.string.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired,
        userID: PropTypes.string.isRequired
      })),
    ]).isRequired,
    replaceTaskFromForm: PropTypes.func.isRequired,
 }

  constructor(props) {
    super(props);
this.state = {title: this.props.data.title,
    body: this.props.data.body,
    taskID: this.props.data.taskID,
    userID: this.props.data.userID};
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
}

  onBtnClickHandler(e) {
    e.preventDefault();
    console.log("t" + this.refs.titleNote.value +
  "b" + this.refs.bodyNote.value);
    let data = {
      title: this.refs.titleNote.value,
      body: this.refs.bodyNote.value
        };

    this.props.replaceTaskFromForm(this.state.userID, this.state.taskID, data)
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

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        placeholder='Заголовок'
        ref='titleNote'
        defaultValue={self.state.title}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
            ref='bodyNote'
            defaultValue={self.state.body}
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnClickHandler}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);