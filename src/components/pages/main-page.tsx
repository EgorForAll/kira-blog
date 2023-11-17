import * as React from 'react';
import Intro from '../blocks/intro/intro';
import PostsList from '../blocks/posts/posts-list';
import PostsTable from '../blocks/posts/posts-table';
import { useAppSelector } from '../../hooks/hooks';

const MainPage = () => {
  const { isTableView, posts } = useAppSelector((state) => state.postsSlice);
  return (
    <main className="pt-3">
      <Intro />
      {isTableView ? <PostsTable posts={posts} /> : <PostsList posts={posts} />}
    </main>
  );
};

export default MainPage;
