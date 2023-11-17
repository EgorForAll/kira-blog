import * as React from 'react';
import ListItem from '../list-item/list-item';
import PaginationList from '../pagination/pagination-list';
import { IPosts } from '../../../models/IPosts';

interface PostsTypes {
  posts: IPosts[];
}

const PostsList: React.FC<PostsTypes> = ({ posts }) => {
  const [currentPage] = React.useState<number>(1);
  const [postsPerPage, setPostPerPage] = React.useState<number>(4);
  const lastPhotosIndex = currentPage * postsPerPage;
  const firstPhotosIndex = lastPhotosIndex - postsPerPage;
  const currentPosts = posts.slice(firstPhotosIndex, lastPhotosIndex);
  return (
    <section className="posts-list">
      <ul className="posts-list__container pt-4 pt-lg-5">
        {currentPosts.map((item, index) => (
          <ListItem key={index} post={item} />
        ))}
      </ul>
      <PaginationList postsPerPage={postsPerPage} loadMore={setPostPerPage} />
    </section>
  );
};

export default PostsList;
