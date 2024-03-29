import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  return (
    <div data-testid="editable-todo-parent-div">
      {todos.map(todo => <EditableTodo //generall put the key first
        todo={todo}
        update={update}
        remove={remove}
        key={todo.id} />)}
    </div>
  );
}

export default EditableTodoList;
