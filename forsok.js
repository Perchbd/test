showEditor(e) {
    e.target.parentNode.parentNode.classList.add('editing');
  }
  
  removeEditing() {
   [].slice.call(document.querySelectorAll('.editing'))
     .map((e) => e.classList.remove('editing'));
  }
  
  editTodo(id, e) {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      this.props.dispatch(Actions.editTodo(id, e.target.value));
      this.removeEditing();
    }
  }