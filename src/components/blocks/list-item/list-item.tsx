import * as React from 'react';
import { IPosts } from '../../../models/IPosts';
import DisplayLikes from '../../ui/display-likes/display-likes';
import DisplayComments from '../../ui/display-comments/display-comments';
import Comments from '../comments/comments';
import YourComment from '../your-cooment/your-comment';
import { countComments } from '../../../utils/utils';

interface PostType {
  post: IPosts;
}

const ListItem: React.FC<PostType> = ({ post }) => {
  const [isCommentMode, setCommentMode] = React.useState<boolean>(false);
  const totalComments = countComments(post);
  return (
    <li className="posts-list__item ">
      <div className="posts-list__photo-wrapper">
        <img className="posts-list__photo" src={post.url_photo} />
      </div>
      <div className="posts-list__text-wrapper">
        <p className="posts-list__text">
          <span className="posts-list__text-subtitle">Kira:</span> {post.text}
        </p>
      </div>
      <div className="posts-list__content">
        <div className="social-media">
          <button className="post-list__button">
            <DisplayLikes likes={post.likes} />
          </button>
          <button className="post-list__button" onClick={() => setCommentMode(!isCommentMode)}>
            <DisplayComments commentsNumber={totalComments} />
          </button>
        </div>
        <div className="posts-list__date">{post.date}</div>
      </div>
      {isCommentMode && post.comments && <Comments comments={post.comments} />}
      {isCommentMode && <YourComment comments={post.comments} />}
    </li>
  );
};

export default ListItem;
