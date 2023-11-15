import * as React from 'react';
import Header from '../layout/header/header';
import Intro from '../blocks/intro/intro';
import PostsTable from '../blocks/posts/posts-table';
import PostsList from '../blocks/posts/posts-list';
import Footer from '../layout/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-3">
        <Intro />
        <PostsList />
      </main>
      <Footer />
    </>
  );
};

export default App;
