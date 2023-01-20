import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { screen } from '@testing-library/dom';
import EditableTodo from "./EditableTodo";
import EditableTodoList from "./EditableTodoList";

const initialTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("main TodoApp component", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={initialTodos} update={() => { }} remove={() => { }} />);
  });

  it("contains expected title", function () {
    const { container } = render(<EditableTodoList todos={initialTodos} update={() => { }} remove={() => { }} />);
    expect(screen.getByText("Code!")).toBeTruthy();
    expect(screen.getByText("Cook something healthy")).toBeTruthy();
    expect(screen.getAllByText("(priority: 1)")).toBeTruthy();
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(3);
  });



  // it("rendered quotes app", function () {
  //     const result = render(<App />);
  //     expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});