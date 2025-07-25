import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateOrviewWidgetContextProvider } from "src/contexts/CreateOrViewWidgetContext";
import Page from "./page";

jest.mock("src/components/Widgets", () => ({
  Widgets: () => <div>Widgets</div>,
}));

const setup = () => {
  return render(
    <CreateOrviewWidgetContextProvider>
      <Page />
    </CreateOrviewWidgetContextProvider>
  );
};

it("renders", () => {
  setup();

  expect(screen.getByText("Widgets")).toBeDefined();
});
