import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  TUseCreateOrViewWidgetContext,
  useCreateOrViewWidgetContext,
} from "../../../context/CreateOrViewWidgetContext";
import { TWidget } from "../types";
import { TextWidget } from ".";

jest.mock("../../../context/CreateOrViewWidgetContext");
const mockedUseCreateOrViewWidgetContext =
  useCreateOrViewWidgetContext as jest.Mock<TUseCreateOrViewWidgetContext>;

const widgets: TWidget[] = [{ id: 1, textString: "Widget number 1" }];
const mockUpdateWidget = jest.fn();
const setup = () => {
  mockedUseCreateOrViewWidgetContext.mockReturnValue({
    widgets,
    createWidget: jest.fn(),
    saveWidgetContent: mockUpdateWidget,
  });

  render(<TextWidget widget={{ id: 1, textString: "Widget number 1" }} />);
};

it("renders", () => {
  setup();

  waitFor(() => expect(screen.getByText("Widget number 1")).toBeDefined());
});

it("calls the expected function when onChange is triggered", () => {
  setup();

  const widget = screen.getByRole("textbox");

  fireEvent.change(widget, { target: { value: "Some change" } });

  expect(mockUpdateWidget).toHaveBeenCalled();
});
