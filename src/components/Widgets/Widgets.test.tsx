import React from "react";
import { render, screen } from "@testing-library/react";

import {
  TUseCreateOrViewWidgetContext,
  useCreateOrViewWidgetContext,
} from "src/contexts/CreateOrViewWidgetContext";
import { Widgets } from ".";

jest.mock("components/Widgets/AddWidgetButton", () => ({
  AddWidgetButton: () => <div>Add Widget Button</div>,
}));

jest.mock("components/Widgets/WidgetContainer", () => ({
  WidgetContainer: () => <div>Widget Container</div>,
}));

jest.mock("src/contexts/CreateOrViewWidgetContext");
const mockUseCreateOrViewWidgetContext =
  useCreateOrViewWidgetContext as jest.Mock<TUseCreateOrViewWidgetContext>;

const setup = () => {
  mockUseCreateOrViewWidgetContext.mockReturnValue({
    createWidget: jest.fn(),
    saveWidgetContent: jest.fn(),
    widgets: [],
  });

  render(<Widgets />);
};

it("renders", () => {
  setup();

  expect(screen.getByText("Add Widget Button")).toBeDefined();
  expect(screen.getByText("Widget Container")).toBeDefined();
});
