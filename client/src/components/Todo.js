import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/removeTodo'

const Todo = ({ onClick, completed, text }) => (
  <li
   // doubleClick={doubleClick}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)
let renderDelete = () => {
  return <button onClick={this.props.onDelete}>x</button>
};

let renderTodo = () => {
  const onDelete = this.props.onDelete

  return (
    <div onClick={this.edit}>
      <span>{this.props.text}</span> {onDelete ? this.renderDelete() : null}
    </div>
  )
}
   

Todo.propTypes = {
 // doubleClick: PropTypes.func.isRequired,

  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
