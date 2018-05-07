import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, getTasks, setEditTaskData, replaceTask } from '../RequestHandle';
import { Notes } from './Notes';

const mapStateToProps = (state) => {
	return {
        id: state.task.id,
        task: state.task.task,
        deletedTask: state.task.deletedTask,
        replacedTask: state.task.replacedTask,
	    error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        getTasksFromForm: (id) => dispatch(getTasks(id)),
        deleteTaskFromForm: (id, taskID) => dispatch(deleteTask(id, taskID)),
        setEditTaskDataFromForm: (data) => dispatch(setEditTaskData(data)),
        replaceTaskFromForm: (id, taskID, data) => dispatch(replaceTask(id, taskID, data))
	};
};

class Note extends Component {

    static propTypes = {
      data: PropTypes.oneOfType([
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired}),
        PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          done: PropTypes.bool.isRequired
        })),
      ]).isRequired,
      id: PropTypes.string,
      deletedTask: PropTypes.object.isRequired,
      deleteTaskFromForm: PropTypes.func.isRequired,
      getTasksFromForm: PropTypes.func.isRequired,
      setEditTaskData: PropTypes.func,
      replaceTaskFromForm: PropTypes.func.isRequired
   }
  
    static defaultProps = {
      data: []
    }
    
    constructor(props) {
          super(props);
      // this.state = {title: this.props.data.title,
      //     body: this.props.data.body,
      //     id: this.props.data.id,
      //     done: this.props.data.done};
          this.onEditNoteBtnClickHandler = this.onEditNoteBtnClickHandler.bind(this);
          this.onDeleteNoteBtnClickHandler = this.onDeleteNoteBtnClickHandler.bind(this);
          this.onCheckComplite = this.onCheckComplite.bind(this);
    }
  
    onEditNoteBtnClickHandler(e) {
        e.preventDefault();

        let data = {
                title: this.props.data.title,
                body: this.props.data.body,
                taskID: this.props.data.id,
                userID: this.props.id   
        };
        
        this.props.setEditTaskDataFromForm(data);
        this.props.history.push('/editNote');
    }
  
    onDeleteNoteBtnClickHandler(e) {
      e.preventDefault();
  
      this.props.deleteTaskFromForm(this.props.id, this.props.data.id);
      //TODO: возможно, удалить данный метод \/
 //    this.props.getTasksFromForm(this.props.id);
  
    }
    onCheckComplite(e) {

        let data = { title: this.props.data.title,
            body: this.props.data.body,
            done: e.target.checked};

        this.props.replaceTaskFromForm(this.props.id, this.props.data.id, data)
    }
  
    render() {
  
      return (
      <div className='note'>
      <h3 onClick={this.onEditNoteBtnClickHandler}>{this.props.data.title}</h3>
      <h3 onClick={this.onEditNoteBtnClickHandler}>{this.props.data.body}</h3>
      <label className='add__checkrule'>
          <input type='checkbox' ref='checkrule' onChange={this.onCheckComplite } defaultChecked={this.props.data.done} />Выполнено
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