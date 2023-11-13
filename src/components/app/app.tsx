import * as React from 'react';
import Header from '../layout/header/header';
import Intro from '../blocks/intro/intro';
import PostsTable from '../blocks/posts/posts';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-3 pb-3">
        <Intro />
        <PostsTable />
      </main>
    </>
  );
};

export default App;
