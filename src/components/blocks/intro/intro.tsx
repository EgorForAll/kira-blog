import * as React from 'react';
import KiraAva from '../../../assets/images/ava.jpg';
import ListSvg from '../../svg/list/list';
import TableSvg from '../../svg/table/table';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { postsSlice } from '../../../store/reducer/reducer';

const Intro: React.FC = () => {
  const { isTableView } = useAppSelector((state) => state.postsSlice);
  const dispatch = useAppDispatch();
  const setListView = () => dispatch(postsSlice.actions.setListView());
  const setTableView = () => dispatch(postsSlice.actions.setTableView());
  return (
    <section className="intro col-12">
      <div className="intro__container d-flex">
        <img className="intro__ava col-3" src={KiraAva} />
        <div className="intro__right col-8">
          <p className="intro__text">
            Всем привет! Меня зовут Кира. Это мой интернет-блог! Здесь я публикую фотографии и
            новости из моей кошачьей жизни! Подписывайтесь на мой блог, пишите комментарии, а
            погладить меня можно лайками! Хочу делиться своей радостью со всеми вами!
          </p>
          <div className="intro__tabs d-flex justify-content-end">
            <button className="tabs__button" onClick={() => setListView()} disabled={!isTableView}>
              <ListSvg />
            </button>
            <button
              className="tabs__button tab-active"
              onClick={() => setTableView()}
              disabled={isTableView}>
              <TableSvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
