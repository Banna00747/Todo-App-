let nextTodoID = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoID++,
  text
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  id,
  text
});

export const completeTodo = id => ({
  type: "COMPLETE_TODO",
  id
});

export const clearCompletedTodo = () => ({
  type: "CLEAR_COMPLETED_TODO"
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
