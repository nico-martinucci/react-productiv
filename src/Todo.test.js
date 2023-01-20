import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Todo from "./Todo";


const todo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("Todo component", function () {
  it("rendering without crashing", function () {
    render(<Todo todo={todo} />);
  });

  it("check for all todo pieces", function () {
    const { container } = render(<Todo todo={todo} />);

    expect(screen.getByText("Code!")).toBeTruthy();
    expect(screen.getByText("Write some code")).toBeTruthy();
    expect(screen.getByText("(priority: 2)")).toBeTruthy();
  });
});