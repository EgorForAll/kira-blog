import * as React from 'react';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import { postsSlice } from '../../store/reducer/reducer';
import { IPosts } from '../../models/IPosts';
import { useAppDispatch } from '../../hooks/hooks';
import { posts } from '../../mock/mock';
import MainPage from '../pages/main-page';

const App = () => {
  const dispatch = useAppDispatch();
  const onFetchPosts = (posts: IPosts[]) => dispatch(postsSlice.actions.fetchPosts(posts));
  React.useEffect(() => {
    onFetchPosts(posts);
  }, []);
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
