// use combine reducer if you have a lot of reducers groups
export function reducers (state = {}, action) {

  console.log('action');
  console.log(action);
  
  switch (action.type) {
    case 'fetchTodo':
      return action.payload;

    case 'addTodo':
      var todos = [...state.todos];
      todos.push(action.payload);
      return {
        ...state,
        todos: todos
      };

    case 'deleteTodo':
      var todos = [...state.todos].filter((item, index) => item._links.self !== action.payload._links.self);
      return {
        ...state,
        todos: todos
      };

    default:
      return {todos: []};
  }
}
