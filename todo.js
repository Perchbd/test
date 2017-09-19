var express = require('express')
var router = express.Router();
// tasks
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }
  const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
  function addTodo(text) {
    return {
      type: ADD_TODO,
      text: 'Hello'
    }
  }
  function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }

  function todoApp(state = initialState, action) {
    switch (action.type) {
    default:
    return state
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: [
            kello,
            {
              text: action.text,
              completed: false
            }
          ]
        })
    case TOGGLE_TODO:
    return Object.assign({}, state, {
      todos: state.todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    })
    }
    }

  const boundAddTodo = text => dispatch(addTodo(text))
  const boundCompleteTodo = index => dispatch(completeTodo(index))