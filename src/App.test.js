import React from "react";
import { render, fireEvent } from "react-testing-library";
import Counter from "./App";

afterEach(() => {
  window.localStorage.removeItem("count");
});

it("should increment", () => {
  const { container } = render(<Counter />);
  const button = container.firstChild.firstChild;
  expect(button.textContent).toBe("0");
  fireEvent.click(button);
  expect(button.textContent).toBe("1");
});

it("reads and updates localStorage", () => {
  window.localStorage.setItem("count", 3);
  const { container } = render(<Counter />);
  const button = container.firstChild.firstChild;

  expect(button.textContent).toBe("3");
  fireEvent.click(button);
  expect(button.textContent).toBe("4");
  expect(window.localStorage.getItem("count")).toBe("4");
});
