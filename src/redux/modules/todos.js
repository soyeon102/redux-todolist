/* ------------------------------ Action Value ------------------------------ */
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

/* ----------------------------- Action Creator ----------------------------- */
export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};
export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id };
};

/* ------------------------------ Initial State ----------------------------- */
const initialState = [];

/* --------------------------------- Reducer -------------------------------- */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      const cleanedTodo = state.filter((todo) => todo.id !== action.id);
      return cleanedTodo;
    case TOGGLE_TODO:
      const toggleTodo = state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return toggleTodo;
    default:
      return state;
  }
};

/* ------------------------- export default reducer ------------------------- */
export default todos;
