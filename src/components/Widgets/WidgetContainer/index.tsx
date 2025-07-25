import React, { memo } from "react";
import { TWidget } from "components/Widgets/types";
import { TextWidget } from "components/Widgets/TextWidget";
import styles from "./widgetContainer.module.css";

export const WidgetContainer = memo(function widgetContainer({
  widgets,
}: {
  widgets: TWidget[];
}) {
  if (!widgets.length) {
    return null;
  }

  return (
    <div className={styles.widgetContainer}>
      {widgets.map((widget) => (
        <TextWidget key={widget.id} widget={widget} />
      ))}
    </div>
  );
});
