/** Компонент категории новостей */

export type IProps = {
  text: string;
};
export const NewsCategory = (props: IProps) => {
  const { text } = props;
  return (
    <>
      <div className={"news__category"}>
        <a href="">{text}</a>
      </div>
    </>
  );
};
