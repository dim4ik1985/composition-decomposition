/** Компонент приложения */

import "./App.css";
import { Widget } from "../Header/Widget";
import { NewsCategory } from "../Header/NewsCategory";
import { NewsList } from "../Header/NewsList";
import { Rates } from "../Header/Rates/Rates.tsx";
import { Search } from "../Search/Search.tsx";
import { NavBar } from "../NavBar/NavBar.tsx";

export type INewsList = {
  img?: string;
  title?: string;
  link?: string;
};

export const App = () => {
  const newsList: INewsList[] = [
    {
      img: "",
      title: "",
      link: ""
    }
  ];

  const navList = ["", "", ""];
  const visitedList = [{}, {}, {}];
  const etherlist = [{}, {}, {}];
  return (
    <>
      <div className={"header"}>
        <div className={"container"}>
          <div className={"header__wrapper"}>
            <div className={"header__news"}>
              <div className={"news__title"}>
                <NewsCategory text={""} />
                <NewsCategory text={""} />
                <NewsCategory text={""} />
              </div>
              <div className={"news__list"}>
                <NewsList items={newsList} />
              </div>
            </div>
            <div className={"rates__wrapper"}>
              <Rates text={""} />
              <Rates text={""} />
              <Rates text={""} />
            </div>
            <Widget img={""} title={""}>
              <p>""</p>
            </Widget>
          </div>
        </div>
      </div>
      <div className={"nav"}>
        <div className={"container"}>
          <div className={"nav__wrapper"}>
            <div className={"nav__list"}>
              <NavBar items={navList} />
            </div>
            <div className={"nav__search"}>
              <Search />
            </div>
            <p className={"nav__text"}>Найдется все...</p>
          </div>
        </div>
      </div>
      <div className={"banner"}>
        <div className={"container"}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={"footer"}>
        <div className={"container"}>
          /** Компонент виджета Погода */
          <Widget title={""}>
            <img src="" alt="" />
            <p>""</p>
          </Widget>
          /** Компонент виджета Посещаемое */
          <Widget title={""}>
            <NewsList items={visitedList}></NewsList>
          </Widget>
          /** Компонент виджета Карта */
          <Widget title={""}>
            <p className={"map__text"}>"</p>
          </Widget>
          /** Компонент виджета Телепрограмма */
          <Widget title={""}>
            <NewsList items={visitedList}></NewsList>
          </Widget>
          /** Компонент виджета Эфир */
          <Widget title={""}>
            <NewsList items={etherlist}></NewsList>
          </Widget>
        </div>
      </div>
    </>
  );
};
