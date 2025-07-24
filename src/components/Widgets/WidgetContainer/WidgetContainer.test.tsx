import React from "react";
import { render, screen } from "@testing-library/react";
import { TWidget } from "../types";
import { WidgetContainer } from ".";

jest.mock("../TextWidget", () => ({
  TextWidget: () => <div>Text Widget</div>,
}));

const defaultWidgets: TWidget[] = [
  { id: 3, textString: "mock widget 1" },
  { id: 4, textString: "mock widget 2" },
];

const setup = (widgets: TWidget[] = defaultWidgets) =>
  render(<WidgetContainer widgets={widgets} />);

it("renders when widgets have been passed down", () => {
  setup();

  expect(screen.queryAllByText("Text Widget")).toHaveLength(2);
});

it("renders no text widgets when widgets are empty", () => {
  setup([]);

  expect(screen.queryAllByText("Text Widget")).toHaveLength(0);
});
