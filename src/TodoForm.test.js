import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import TodoForm from "./TodoForm";


const todo =
{
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("TodoForm component", function () {
  it("rendering without crashing", function () {
    render(<TodoForm initialFormData={todo} handleSave={() => { }} />);
  });

  it("rendering in edit context", function () {
    const { container } = render(<TodoForm initialFormData={todo} handleSave={() => { }} />);

    expect(container.querySelector("#newTodo-title").value).toEqual("Code!");
    expect(container.querySelector("#newTodo-description").value).toEqual("Write some code");
    expect(container.querySelector("#newTodo-priority").value).toEqual("2");

    expect(container.querySelector(".NewTodoForm-addBtn")).toBeTruthy();
  });
  
  it("rendering in new todo context", function () {
    const { container } = render(<TodoForm handleSave={() => { }} />);

    expect(container.querySelector("#newTodo-title").value).toEqual("");
    expect(container.querySelector("#newTodo-description").value).toEqual("");
    expect(container.querySelector("#newTodo-priority").value).toEqual("1");

    expect(container.querySelector(".NewTodoForm-addBtn")).toBeTruthy();
  });
});