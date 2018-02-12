const Todos = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case 'GET_TODO':
      return { ...state, items: action.payload};
    case 'POST_TODO':
      return {...state, items: [...state.items].concat(action.payload), newTodo: ""}
    case 'HANDLE_CHANGE':
      return { ...state, newTodo: action.payload };
    case 'DELETE_TODO':
      let itemArray = state.items;
      let arr = itemArray.map((item) => item.id);
      let list = {items: itemArray.splice(arr.indexOf(action.payload),1)};
      return {...state, items: itemArray};
    case 'EDIT_TODO':
      return { ...state, isEditable: action.payload}
    default:
      return state;
  }
}

export default Todos;