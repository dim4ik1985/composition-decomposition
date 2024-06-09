/** Компонент новостей */

export type IProps = {
  img?: string;
  title?: string;
  link?: string;
};

export const News = (props: IProps) => {
  const { img, title, link } = props;
  return (
    <li className={"news__item"}>
      <img src={img} alt="" />
      <a href={link}>{title}</a>
    </li>
  );
};
