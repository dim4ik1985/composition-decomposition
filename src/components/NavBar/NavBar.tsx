/** Компонент навигационной панели */

export type IProps = {
  items: string[];
};

export const NavBar = (props: IProps) => {
  const { items } = props;
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
