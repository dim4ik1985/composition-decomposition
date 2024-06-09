/** Компонент курсы валют */

export type IProps = {
  text: string;
};
export const Rates = (props: IProps) => {
  const { text } = props;
  return <div className={"rates__text"}>{text}</div>;
};
