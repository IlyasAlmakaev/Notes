import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks, addTask } from '../RequestHandle';
import Note from './Note'

const mapStateToProps = (state) => {
	return {
    id: state.task.id,
    tasks: state.task.tasks,
    task: state.task.task,
		error: state.task.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getTasksFromForm: (id) => dispatch(getTasks(id)),
    addTaskFromForm: (id, data) => dispatch(addTask(id, data))
	};
};


class NotesList extends Component {

  constructor(props) {
		super(props); 
  }

  render() {

    let data = this.props.data;
    let notesTemplate;
    let self = this;

		if (data.length > 0) {
			notesTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Note data={item} history={self.props.history}/>
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

class Notes extends Component {

  static propTypes = {
    id: PropTypes.string,
    getTasksFromForm: PropTypes.func.isRequired,
    addTaskFromForm: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

  constructor(props) {
		super(props);
		this.onAddNoteBtnClickHandler = this.onAddNoteBtnClickHandler.bind(this);  
  }

  componentDidMount() {
    console.log("idd" + this.props.id);
    this.props.getTasksFromForm(this.props.id)
  }

  componentWillReceiveProps(props) {	
    console.log("tsss " + props.tasks + "err" + props.error);
	}

  onAddNoteBtnClickHandler(e) {
    e.preventDefault();

    let data = {
      title: 'teeesxxt',
      body: "bodyTask"
		};
    // TODO: переправить на нужную страницу
    this.props.addTaskFromForm(this.props.id, data)
    
  //  this.props.history.push('/editNote');
	}

  render() {
    let self = this;
    return (
      <form className='notes'>
        <h1>Заметки</h1>
        <NotesList data={self.props.tasks} history={self.props.history} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Notes);