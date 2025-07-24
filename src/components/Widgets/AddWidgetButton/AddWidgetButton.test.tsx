import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddWidgetButton } from ".";

const mockOnClick = jest.fn();
const setup = () => render(<AddWidgetButton onClick={mockOnClick} />);

it("renders", () => {
  setup();

  expect(screen.getByText("+ Add Widget")).toBeDefined();
});

it("calls the expects function when clicked", () => {
  setup();

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
