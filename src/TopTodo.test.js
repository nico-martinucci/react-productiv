import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import TopTodo from "./TopTodo";

const todos = [
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

describe("TopTodo component", function () {
  it("rendering without crashing", function () {
    render(<TopTodo todos={todos} />);
  });

  it("shows highest priority todo", function () {
    render(<TopTodo todos={todos} />);

    expect(screen.getByText("Make dinner")).toBeTruthy();
    expect(screen.getByText("Cook something healthy")).toBeTruthy();
    expect(screen.getByText("(priority: 1)")).toBeTruthy();
  });
});