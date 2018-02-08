const Todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODO':
      return { ...state, items:action.payload}
    default:
      return state;
  }
}

export default Todos;