import {SET_TODO_ACTION_TYPE, ADD_TODO_ACTION_TYPE, DELETE_TODO_ACTION_TYPE} from '../action/TodoActions';

// use combine reducer if you have a lot of reducers groups
export function reducers(state = {}, action) {

  console.log('action');
  console.log(action);

  switch (action.type) {
    case SET_TODO_ACTION_TYPE:
      return {
        ...state,
        todos: action.payload
      };

    case ADD_TODO_ACTION_TYPE:
      var todos = [...state.todos];
      todos.push(action.payload);
      return {
        ...state,
        todos: todos
      };

    case DELETE_TODO_ACTION_TYPE:
      var todos = [...state.todos].filter((item, index) => item._links.self !== action.payload._links.self);
      return {
        ...state,
        todos: todos
      };

    default:
      return {todos: []};
  }
}
