import * as React from 'react';
import Header from '../layout/header/header';
import Intro from '../blocks/intro/intro';
import PostsTable from '../blocks/posts/posts';
import Footer from '../layout/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-3">
        <Intro />
        <PostsTable />
      </main>
      <Footer />
    </>
  );
};

export default App;
