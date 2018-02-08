export const getTodo = (response) => {
  return {
    type: "GET_TODO",
    payload: response
  };
};

export const postTodo = (newTodo) => {
  return {
    type: "POST_TODO",
    payload: newTodo
  };
};
