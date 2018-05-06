import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { request } from './ModuleHttp';

const mapStateToProps = (state) => {
	return {
    data: state.task.data,
		error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
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
    ]).isRequired
 }

  constructor(props) {
    super(props);
this.state = {title: this.props.data.title,
    body: this.props.data.body,
    taskID: this.props.data.taskID,
    userID: this.props.data.userID};
}

  onBtnClickHandler(e) {
		e.preventDefault();

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
        ref='email'
        defaultValue={self.state.title}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
            ref='text'
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