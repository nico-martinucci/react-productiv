import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { screen } from '@testing-library/dom';
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

const todo =
{
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
}
  ;

describe("main TodoApp component", function () {
  it("rendering TodoForm in edit context without crashing", function () {
    render(<TodoForm initialFormData={todo} handleSave={() => { }} />);
  });

  it("contains expected title", function () {
    const { container } = render(<TodoForm initialFormData={todo} handleSave={() => { }} />);
    // expect(screen.getByText("Code!")).toBeTruthy();
    // expect(screen.getByText("")).toBeTruthy();
    // expect(screen.getAllByText("(priority: 1)")).toBeTruthy();
    console.log("console", container.querySelector("#newTodo-title"));
    expect(container.querySelector("#newTodo-title").value).toEqual("Code!");

  });



  // it("rendered quotes app", function () {
  //     const result = render(<App />);
  //     expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});