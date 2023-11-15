import * as React from 'react';
import { posts } from '../../../mock/mock';
import ListItem from '../list-item/list-item';

const PostsList: React.FC = () => {
  return (
    <section className="posts-list">
      <ul className="posts-list__container pt-4 pt-lg-5">
        {posts.map((item, index) => (
          <ListItem key={index} post={item} />
        ))}
      </ul>
    </section>
  );
};

export default PostsList;
