import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';

const allReducers = combineReducers({
  todoList: todoReducer
});

export default allReducers;
