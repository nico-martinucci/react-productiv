import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import EditableTodo from "./EditableTodo";


const todo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("EditableTodo component", function () {
  it("rendering without crashing", function () {
    render(<EditableTodo todo={todo} update={() => { }} remove={() => { }} />);
  });

  it("check for 'Edit' and 'Del' buttons", function () {
    const { container } = render(<EditableTodo todo={todo} update={() => { }} remove={() => { }} />);

    expect(container.querySelector(".EditableTodo-toggle")).toBeTruthy();
    expect(container.querySelector(".EditableTodo-delBtn")).toBeTruthy();
  });
});