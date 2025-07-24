import React, { memo } from "react";
import { TWidget } from "../types";
import { TextWidget } from "../TextWidget";

export const WidgetContainer = memo(function widgetContainer({
  widgets,
}: {
  widgets: TWidget[];
}) {
  if (!widgets.length) {
    return null;
  }

  return (
    <>
      {widgets.map((widget) => (
        <TextWidget key={widget.id} widget={widget} />
      ))}
    </>
  );
});
