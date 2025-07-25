import React, { ReactElement } from "react";
import styles from "./addButton.module.css";

type TAddWidgetButton = {
  onClick: () => void;
};

export const AddWidgetButton = ({
  onClick,
}: TAddWidgetButton): ReactElement => (
  <button className={styles.addWidget} onClick={onClick}>
    + Add Widget
  </button>
);
