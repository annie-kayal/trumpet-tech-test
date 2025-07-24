import React, { ReactElement } from "react";
import styles from "./textwidget.module.css";
import { useCreateOrViewWidgetContext } from "@/context/CreateOrViewWidgetContext";
import { TWidget } from "../types";

export type TTextWidget = {
  widget: TWidget;
};

export const TextWidget = ({ widget }: TTextWidget): ReactElement => {
  const { saveWidgetContent } = useCreateOrViewWidgetContext();

  return (
    <div className={styles.widgetContainer}>
      <textarea
        placeholder="Type something into your widget!"
        className={styles.widget}
        autoFocus
        onChange={(e) =>
          saveWidgetContent({ content: e.target.value, widgetId: widget.id })
        }
        value={widget.textString}
        onInput={(e) => {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
        }}
      />
    </div>
  );
};
