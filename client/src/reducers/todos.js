const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case 'REMOVE_TODO' :
      return state.filter(todo => todo.id !== action.id);
    case 'EDIT_TODO' :
      return state.map(todo => todo.id === action.id ?
              Object.assign({}, todo, action.id) : todo );
   default:
      return state
  }
}

export default todos