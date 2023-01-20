import React from "react";
import { createPortal } from "react-dom";
import sample from "lodash/sample";

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
  const topTodo = todos[0];

  // TODO: pull this out into a helper
  let highestPriority = [];

  for (let p of [1,2,3]) {
    highestPriority = todos.filter(t => t.priority === p);
    if (highestPriority.length > 0) break;
  }
  //

  return <Todo  todo={sample(highestPriority)}/>;
}

export default TopTodo;