/** Компонент списка новостей */
import { News } from "../News";

export type IProps = {
  items: {
    img?: string;
    title?: string;
    link?: string;
  }[];
};

export const NewsList = (props: IProps) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li>
          <News key={item.title} img={item.img} title={item.title} link={item.link} />
        </li>
      ))}
    </ul>
  );
};
