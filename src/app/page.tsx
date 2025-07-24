"use client";
import styles from "./page.module.css";
import { Widgets } from "@/components/Widgets";
import { CreateOrviewWidgetContextProvider } from "@/context/CreateOrViewWidgetContext";

export default function Home() {
  return (
    <div className={styles.page}>
      <CreateOrviewWidgetContextProvider>
        <Widgets />
      </CreateOrviewWidgetContextProvider>
    </div>
  );
}
