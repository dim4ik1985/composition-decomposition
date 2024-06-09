/** Компонент виджета */
import React from "react";

export type WidgetProps = {
  img?: string;
  title: string;
  children?: React.ReactNode;
};

export const Widget = (props: WidgetProps) => {
  const { img, title, children } = props;
  return (
    <div className={"widget__wrapper"}>
      <div className={"widget__img"}>
        <img src={img} alt={title} />
      </div>
      <div className={"widget__title"}>{title}</div>
      <div className={"widget__body"}>{children}</div>
    </div>
  );
};
