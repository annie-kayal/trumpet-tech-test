import React, { memo } from "react";
import styles from "../../../app/page.module.css";
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
    <div className={styles.main}>
      {widgets.map((widget) => (
        <TextWidget key={widget.id} widget={widget} />
      ))}
    </div>
  );
});
