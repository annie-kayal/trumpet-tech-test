import React, { ReactElement } from "react";
import { useCreateOrViewWidgetContext } from "src/contexts/CreateOrViewWidgetContext";
import { AddWidgetButton } from "components/Widgets/AddWidgetButton";
import { WidgetContainer } from "components/Widgets/WidgetContainer";

export const Widgets = (): ReactElement => {
  const { widgets, createWidget } = useCreateOrViewWidgetContext();

  return (
    <>
      <AddWidgetButton onClick={createWidget} />

      <WidgetContainer widgets={widgets} />
    </>
  );
};
