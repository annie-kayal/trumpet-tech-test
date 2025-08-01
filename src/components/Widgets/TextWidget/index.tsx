import React, { ReactElement, useState } from "react";
import { useCreateOrViewWidgetContext } from "src/contexts/CreateOrViewWidgetContext";
import styles from "./textwidget.module.css";
import { TWidget } from "components/Widgets/types";

export type TTextWidget = {
  widget: TWidget;
};

export const TextWidget = ({ widget }: TTextWidget): ReactElement => {
  const [inputtedTextValue, setInputtedTextValue] = useState(widget.textString);
  const { saveWidgetContent } = useCreateOrViewWidgetContext();

  return (
    <div className={styles.widgetContainer}>
      <textarea
        placeholder="Type something into your widget!"
        className={styles.widget}
        autoFocus
        onChange={(e) => {
          setInputtedTextValue(e.target.value);
          saveWidgetContent({ content: e.target.value, widgetId: widget.id });
        }}
        value={inputtedTextValue}
        onInput={(e) => {
          e.currentTarget.style.height = "auto";
          e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
        }}
      />
    </div>
  );
};
