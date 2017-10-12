import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {removeTodo} from '../actions'
import {Components} from 'react'


const handleOnDelete = (id) => {
  this.props.dispatch(removeTodo(id))
};




const TodoList = ({ todos, onTodoClick, onDelete }) => (
   <ul>
    {todos.map(todo =>
    <li key={todo.id}>
      <Todo        
    {...todo}
       onClick={() => onTodoClick(todo.id)}
        onDelete={handleOnDelete(null, todo.id)}
       // onDoubleClick={() => onDoubleClick(todo.id)}
      />
      </li>
    )};
  </ul>
    //<button onClick={this.toggleEdit} className="btn btn-default">    edit       </button>
    
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  //  edit: PropTypes.string.isRequired,
   // rmov: PropTypes.bool.isRequired 
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
