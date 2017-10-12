let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
export const editTodo = (id, title) => {
  return {
    type: 'EDIT_TODO',
    payload : {
      id : id,
      title : title
    }
  }
}

export const removeTodo = (id) => {
  return {
    type : 'REMOVE_TODO',
    id: id
  }
}