export function fetchTodo(todos) {

  return {
    type: 'fetchTodo',
    payload: {
      todos: todos
    }
  };

}

export function addTodo(todo) {

  return {
    type: 'addTodo',
    payload: todo
  };

}

export function deleteTodo(todo) {

  return {
    type: 'deleteTodo',
    payload: todo
  };

}
