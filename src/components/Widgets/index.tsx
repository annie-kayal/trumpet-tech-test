import React, { ReactElement } from "react";
import { useCreateOrViewWidgetContext } from "@/context/CreateOrViewWidgetContext";
import { AddWidgetButton } from "./AddWidgetButton";
import { WidgetContainer } from "./WidgetContainer";

export const Widgets = (): ReactElement => {
  const { widgets, createWidget } = useCreateOrViewWidgetContext();

  return (
    <>
      <AddWidgetButton onClick={createWidget} />

      <WidgetContainer widgets={widgets} />
    </>
  );
};
