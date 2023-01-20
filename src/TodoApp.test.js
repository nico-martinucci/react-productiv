import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { screen } from '@testing-library/dom';

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
    render(<TodoApp initialTodos={initialTodos} />);
  });

  it("contains expected title", function () {
    render(<TodoApp initialTodos={initialTodos} />);
    expect(screen.getByText("Todos")).toBeTruthy();
    expect(screen.getByText("Top Todo")).toBeTruthy();
    expect(screen.getByText("Add Nü")).toBeTruthy();
  });

  it("todo list shows no todo message if no todos", function () {
    render(<TodoApp />);
    expect(screen.getByText("You have no todos.")).toBeTruthy();
    expect(screen.getByText("No top todo!")).toBeTruthy();
  });



  // it("rendered quotes app", function () {
  //     const result = render(<App />);
  //     expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});