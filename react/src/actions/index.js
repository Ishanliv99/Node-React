export const getTodo = (response) => {
  return {
    type: "GET_TODO",
    payload: response
  };
};

export const postTodo = (response) => {
  return {
    type: "POST_TODO",
    payload: response
  };
};

export const handleChange = (change) => {
  return {
    type: "HANDLE_CHANGE",
    payload: change
  }
}

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id
  }
}

export const editTodo = (toggle) => {
  return {
    type: "EDIT_TODO",
    payload: toggle
  }
}
