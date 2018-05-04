import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks, addTask } from './RequestHandle';

let notesComponents = [
	{
		noteText: 'Саша Печкин'
	},
	{
		noteText: 'Просто Вася'
	},
	{
		noteText: 'Гость'
	}
]

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

class Note extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        noteText: PropTypes.string.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        noteText: PropTypes.string.isRequired
      })),
    ]).isRequired
 }

  static defaultProps = {
    data: []
  }
  
  constructor(props) {
		super(props);
		this.state = {noteText: this.props.data.noteText};
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

  }
  onCheckComplite(e) {
	//	e.preventDefault();

  }

  render() {

    return (
    <div className='note'>
    <h3 onClick={this.onEditNoteBtnClickHandler}>{this.state.noteText}</h3>
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
    tasks: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

  constructor(props) {
		super(props);
		this.onAddNoteBtnClickHandler = this.onAddNoteBtnClickHandler.bind(this);  
  }

  componentDidMount() {
		console.log("idd" + this.props.id);
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
   // this.props.getTasksFromForm(this.props.id)
  //  this.props.history.push('/editNote');
	}

  render() {
    let self = this;
    return (
      <form className='notes'>
        <h1>Заметки</h1>
        <NotesList data={notesComponents} history={self.props.history} />
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