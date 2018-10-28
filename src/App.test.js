import React from "react";
import { render, fireEvent } from "react-testing-library";
import Counter from "./App";

it("should increment", () => {
  const { container } = render(<Counter />);
  const button = container.firstChild.firstChild;
  expect(button.textContent).toBe("0");
  fireEvent.click(button);
  expect(button.textContent).toBe("1");
});
