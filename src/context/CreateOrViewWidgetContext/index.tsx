import React, { ReactNode, useContext, useEffect, useState } from "react";
import { debounce } from "throttle-debounce";
import { TWidget } from "@/components/Widgets/types";

export type TSaveWidget = { widgetId: number; content: string };

export type TUseCreateOrViewWidgetContext = {
  createWidget: () => void;
  saveWidgetContent: (props: TSaveWidget) => void;
  widgets: TWidget[];
};

export const CreateOrViewWidgetContext = React.createContext<
  undefined | TUseCreateOrViewWidgetContext
>(undefined);

export const useCreateOrViewWidgetContext = () => {
  const context = useContext(CreateOrViewWidgetContext);

  if (!context) {
    throw new Error(
      `useCreateOrviewWidgetContext must be wrapped in the CreateOrviewWidgetContext Provider`
    );
  }

  return context;
};

export const CreateOrviewWidgetContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [widgets, setWidgets] = useState<TWidget[]>([]);

  const fetchWidgets = async () => {
    const widgets = await window.localStorage.getItem("widgetList");

    if (widgets) {
      const parsedWidgets = JSON.parse(widgets);

      setWidgets(parsedWidgets);
    } else {
      window.localStorage.setItem("widgetList", JSON.stringify([]));
    }
  };

  const createNewWidget = () => {
    const updatedWidgets = [...widgets, { id: widgets.length + 1 }];
    setWidgets(updatedWidgets);
    window.localStorage.setItem("widgetList", JSON.stringify(updatedWidgets));
  };

  const saveWidget = debounce(500, ({ widgetId, content }: TSaveWidget) => {
    const widgetContentToEdit = widgets.find(
      (widget) => widget.id === widgetId
    );

    if (widgetContentToEdit) {
      widgetContentToEdit.textString = content;

      window.localStorage.setItem("widgetList", JSON.stringify(widgets));

      fetchWidgets();
    }
  });

  useEffect(() => {
    fetchWidgets();
  }, []);

  return (
    <CreateOrViewWidgetContext.Provider
      value={{
        createWidget: createNewWidget,
        widgets,
        saveWidgetContent: saveWidget,
      }}
    >
      {children}
    </CreateOrViewWidgetContext.Provider>
  );
};
