import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { request } from './ModuleHttp';
import { replaceTask, setTitle } from './RequestHandle';

const mapStateToProps = (state) => {
	return {
    data: state.task.present.data,
    error: state.task.present.error,
    replacedTask: state.task.present.replacedTask,
    title: state.task.present.title
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    replaceTaskFromForm: (id, taskID, data) => dispatch(replaceTask(id, taskID, data)),
    setTitle: (title) => dispatch(setTitle(title))
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
    replacedTask: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    title: PropTypes.string.isRequired
 }

  constructor(props) {
    super(props);
    this.onBtnEditClickHandler = this.onBtnEditClickHandler.bind(this);
    this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);
    this.onTitleFieldChange = this.onTitleFieldChange.bind(this);
}

  onBtnEditClickHandler(e) {
    e.preventDefault();

    let data = {
      title: this.refs.titleNote.value,
      body: this.refs.bodyNote.value
      };

    this.props.replaceTaskFromForm(this.props.data.userID, this.props.data.taskID, data)
    this.props.history.push('/notes');
	}

	onBtnCloseClickHandler(e) {
		e.preventDefault();
    let isClosed = window.confirm('Закрыть без сохранения?');

    if (isClosed) {
      this.props.history.push('/notes');
    } 
  }
  
  onTitleFieldChange(e) {
    this.props.setTitle(e.target.value.trim());
	}

  render() {

    let self = this;

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        onChange={self.onTitleFieldChange}
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