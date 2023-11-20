import * as React from 'react';
import { useState } from 'react';
import DisplayLikes from '../../ui/display-likes/display-likes';
import DisplayComments from '../../ui/display-comments/display-comments';
import { IPosts } from '../../../models/IPosts';
import { useAppDispatch } from '../../../hooks/hooks';
import { postsSlice } from '../../../store/reducer/reducer';
import { countComments } from '../../../utils/utils';

interface PostType {
  post: IPosts;
  setCurrentPost: (post: IPosts) => void;
}

const TableItem: React.FC<PostType> = ({ post, setCurrentPost }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const totalComments = countComments(post);
  return (
    <>
      <div
        className="table__item"
        onClick={() => setCurrentPost(post)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}>
        {hovered && (
          <div className="tabel__item-overlay">
            <div className="tabel__item-content">
              <DisplayLikes likes={post.likes} />
              <DisplayComments commentsNumber={totalComments} />
            </div>
          </div>
        )}
        <img className="table__item-photo" src={post.url_photo} alt={post.text} />
      </div>
    </>
  );
};

export default TableItem;
