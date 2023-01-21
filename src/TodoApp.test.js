import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { fireEvent, screen } from '@testing-library/dom';

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
    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Top Todo")).toBeInTheDocument();
    expect(screen.getByText("Add Nü")).toBeInTheDocument();
  });

  it("todo list shows no todo message if no todos", function () {
    render(<TodoApp />);
    expect(screen.getByText("You have no todos.")).toBeInTheDocument();
    expect(screen.getByText("No top todo!")).toBeInTheDocument();
  });

  it("creating new todo that is not top", function () {
    render(<TodoApp initialTodos={[initialTodos[1]]} />);
    fireEvent.change(screen.getByLabelText("Title"), { target: { value: "test-title" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "test-description" } });
    fireEvent.change(screen.getByLabelText("Priority:"), { target: { value: 2 } });
    fireEvent.click(screen.getByText("Gø!"));

    expect(screen.getByText("test-title")).toBeInTheDocument();
    expect(screen.getByText("test-description")).toBeInTheDocument();
    expect(screen.getByText("(priority: 2)")).toBeInTheDocument();
  });

  it("creating new todo that is the top", function () {
    const { debug } = render(<TodoApp initialTodos={[initialTodos[2]]} />);
    fireEvent.change(screen.getByLabelText("Title"), { target: { value: "test-title" } });
    fireEvent.change(screen.getByLabelText("Description"), { target: { value: "test-description" } });
    fireEvent.input(screen.getByLabelText("Priority:") as HTMLSelectElement { target: { value: 2 } });
    console.log("Priority-", screen.getByLabelText("Priority:"));
    fireEvent.click(screen.getByText("Gø!"));
    console.log(debug());
    expect(screen.getAllByText("test-title")).toHaveLength(2);
    expect(screen.getAllByText("test-description")).toHaveLength(2);
    expect(screen.getAllByText("(priority: 1)")).toHaveLength(2);
    // console.log(debug());
  });

  // it("deleting a todo", function () {
  //   const { debug } = render(<TodoApp initialTodos={[initialTodos[0]]} />);
  //   fireEvent.click(screen.getByText("Del"));
  //   // console.log(debug());
  //   expect(screen.getByText("Code!")).not.toBeInTheDocument();
  //   expect(screen.getByText("Write some code")).not.toBeInTheDocument();
  //   expect(screen.getByText("(priority: 2)")).not.toBeInTheDocument();
  // });
});