import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { request } from './ModuleHttp';
import { replaceTask } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
    data: state.task.data,
    error: state.task.error,
    replacedTask: state.task.replacedTask
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
    replacedTask: PropTypes.object.isRequired
 }

  constructor(props) {
    super(props);
    this.onBtnEditClickHandler = this.onBtnEditClickHandler.bind(this);
    this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);
}

componentWillReceiveProps(props) {	

  if (props.replacedTask) {
    this.props.history.push('/notes');
  } else {
    alert("Ошибка при редактировании заметки")
  }
}

  onBtnEditClickHandler(e) {
    e.preventDefault();

    let data = {
      title: this.refs.titleNote.value,
      body: this.refs.bodyNote.value
      };

    this.props.replaceTaskFromForm(this.props.data.userID, this.props.data.taskID, data)
	}

	onBtnCloseClickHandler(e) {
		e.preventDefault();
    let isClosed = window.confirm('Закрыть без сохранения?');

    if (isClosed) {
      this.props.history.push('/notes');
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
        defaultValue={self.props.data.title}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
            ref='bodyNote'
            defaultValue={self.props.data.body}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);