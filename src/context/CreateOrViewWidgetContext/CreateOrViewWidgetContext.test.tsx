import React, { ReactNode } from "react";
import { debounce } from "throttle-debounce";
import { act, renderHook, waitFor } from "@testing-library/react";
import {
  CreateOrviewWidgetContextProvider,
  useCreateOrViewWidgetContext,
} from ".";

jest.mock("throttle-debounce", () => ({
  ...jest.requireActual("throttle-debounce"),
  debounce: jest.fn(),
}));

const mockedDebounce = debounce as jest.Mock;
const wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <CreateOrviewWidgetContextProvider>
      {children}
    </CreateOrviewWidgetContextProvider>
  );
};

const setup = ({
  storedWidgetList = {},
}: {
  storedWidgetList?: { [key: string]: string | number };
}) => {
  localStorage.setItem("widgetList", JSON.stringify(storedWidgetList));
  mockedDebounce.mockReturnValue(() => jest.fn((callback) => callback()));

  return renderHook(() => useCreateOrViewWidgetContext(), { wrapper });
};

it("initialises correctly", () => {
  const { result } = setup({});

  const { createWidget, widgets, saveWidgetContent } = result.current;

  waitFor(() => {
    expect(typeof saveWidgetContent).toBe("function");
    expect(typeof createWidget).toBe("function");
    expect(widgets).toStrictEqual([]);
  });
});

it("sets the widgets into state which are stored in local storage", () => {
  const storedWidget = { id: 32, textContent: "This is a widget" };
  const { result } = setup({ storedWidgetList: storedWidget });

  waitFor(() => expect(result.current.widgets).toStrictEqual([storedWidget]));
});

it("sets a widget item into local storage when there are no widgets found", () => {
  setup({});

  const storedWidgetList = localStorage.getItem("widgetList");

  waitFor(() => expect(storedWidgetList).toBe("{}"));
});

it("creates a new widget and has stored this in local storage", () => {
  const { result } = setup({
    storedWidgetList: { id: 32, textContent: "This is a widget" },
  });
  const storedWidgetList = localStorage.getItem("widgetList");

  act(() => {
    result.current.createWidget();
  });

  waitFor(() => {
    expect(result.current.widgets).toStrictEqual([
      { id: 32, textContent: "This is a widget" },
      { id: 33 },
    ]),
      expect(storedWidgetList).toStrictEqual(
        JSON.stringify([
          { id: 32, textContent: "This is a widget" },
          { id: 33 },
        ])
      );
  });
});

it("updates the correct widget when the text content has changed", () => {
  const widgetList = localStorage.getItem("widgetList");
  const { result } = setup({
    storedWidgetList: { id: 32, textContent: "This is a widget" },
  });

  act(() =>
    result.current.saveWidgetContent({
      widgetId: 32,
      content: "The content has changed",
    })
  );

  waitFor(() => {
    expect(result.current.widgets).toStrictEqual([
      { id: 32, textContent: "The content has changed" },
    ]);
    expect(widgetList).toStrictEqual(
      JSON.stringify([{ id: 32, textContent: "The content has changed" }])
    );
  });
});
