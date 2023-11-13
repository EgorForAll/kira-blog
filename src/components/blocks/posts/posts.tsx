import * as React from 'react';
import TableItem from '../table-item/table-item';
import { posts } from '../../../mock/mock';

const PostsTable = () => {
  return (
    <section className="posts-table">
      <div className="posts__container pt-4 pb-4 pt-lg-5 pb-lg-5">
        <div className="posts__layout">
          {posts.map((item, index) => (
            <TableItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsTable;
