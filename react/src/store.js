import { createStore, compose } from 'redux';
import allReducers from './reducers/index'

export const initialState = {
  todoList: {
    items: [],
    tagIds: [],
    tagNames: [],
    newTodo: "",
    editedItemid: 0,
    isEditable: 1
  }
}

let store = createStore(
  allReducers,
  initialState,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;