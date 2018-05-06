import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../RequestHandle';

const mapStateToProps = (state) => {
	return {
        id: state.task.id,
        task: state.task.task,
	    error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    deleteTaskFromForm: (id, taskID) => dispatch(deleteTask(id, taskID))
	};
};

class Note extends Component {

    static propTypes = {
      data: PropTypes.oneOfType([
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired}),
        PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })),
      ]).isRequired,
      id: PropTypes.string,
      deleteTaskFromForm: PropTypes.func.isRequired
   }
  
    static defaultProps = {
      data: []
    }
    
    constructor(props) {
          super(props);
      this.state = {title: this.props.data.title,
          body: this.props.data.body,
          id: this.props.data.id};
          this.onEditNoteBtnClickHandler = this.onEditNoteBtnClickHandler.bind(this);
          this.onDeleteNoteBtnClickHandler = this.onDeleteNoteBtnClickHandler.bind(this);
          this.onCheckComplite = this.onCheckComplite.bind(this);	  
    }
  
    onEditNoteBtnClickHandler(e) {
        e.preventDefault();
        this.props.history.push('/editNote');
    }
  
    onDeleteNoteBtnClickHandler(e) {
      e.preventDefault();
  
      this.props.deleteTaskFromForm(this.props.id, this.state.id)
  
    }
    onCheckComplite(e) {
      //	e.preventDefault();
  
    }
  
    render() {
  
      return (
      <div className='note'>
      <h3 onClick={this.onEditNoteBtnClickHandler}>{this.state.title}</h3>
      <h3 onClick={this.onEditNoteBtnClickHandler}>{this.state.body}</h3>
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

  export default connect(mapStateToProps, mapDispatchToProps)(Note);