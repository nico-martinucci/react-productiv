import React from "react";
import { createPortal } from "react-dom";
import { getTopTodo } from "./helpers";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={getTopTodo(todos)} />;
}

export default TopTodo;