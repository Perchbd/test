import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div>
        <a onClick={e => {
          e.preventDefault()
          dispatch(removeTodo())

          console.log(dispatch(removeTodo(id)));
        }}>Remove TODO</a>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo