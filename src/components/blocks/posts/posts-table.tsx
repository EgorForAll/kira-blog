import * as React from 'react';
import TableItem from '../table-item/table-item';
import Pagination from '../pagination/pagination';
import { IPosts } from '../../../models/IPosts';
import ModalWindow from '../modal-window/modal-window';
import Overlay from '../../ui/overlay/overlay';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { postsSlice } from '../../../store/reducer/reducer';

interface PostsTypes {
  posts: IPosts[];
}

const PostsTable: React.FC<PostsTypes> = ({ posts }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const { currentPost } = useAppSelector((state) => state.postsSlice);
  const dispatch = useAppDispatch();
  const setCurrentPost = (post: IPosts | null) => dispatch(postsSlice.actions.setCurrentPost(post));
  const [photosPerPage] = React.useState<number>(9);
  const lastPhotosIndex = currentPage * photosPerPage;
  const firstPhotosIndex = lastPhotosIndex - photosPerPage;
  const currentPhotos = posts.slice(firstPhotosIndex, lastPhotosIndex);
  const togglePage = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <section className="posts-table">
      {currentPost && <Overlay />}
      <div className="posts__container pt-4 pt-lg-5">
        <div className="posts__layout">
          {currentPhotos.map((item, index) => (
            <TableItem post={item} setCurrentPost={setCurrentPost} key={index} />
          ))}
        </div>
        <Pagination
          photosPerPage={photosPerPage}
          togglePage={togglePage}
          totalPhotos={posts.length}
        />
      </div>
      {currentPost && <ModalWindow setCurrentPost={setCurrentPost} post={currentPost} />}
    </section>
  );
};

export default PostsTable;
