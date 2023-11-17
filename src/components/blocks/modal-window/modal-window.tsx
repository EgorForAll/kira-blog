import * as React from 'react';
import DisplayLikes from '../../ui/display-likes/display-likes';
import DisplayComments from '../../ui/display-comments/display-comments';
import Comments from '../comments/comments';
import YourComment from '../your-cooment/your-comment';
import { IPosts } from '../../../models/IPosts';

interface CurrentPostType {
  setCurrentPost: (post: IPosts | null) => void;
  post: IPosts;
}

const ModalWindow: React.FC<CurrentPostType> = ({ setCurrentPost, post }) => {
  const commentsNumber = post.comments ? post.comments.length : 0;
  const responseNumber = post.comments
    ? post.comments.reduce((sum, cur) => (cur.response ? sum + cur.response.length : sum), 0)
    : 0;
  const totalComments = commentsNumber + responseNumber;
  return (
    <div className="modal-window">
      <div className="modal-window__header">
        <button className="modal-window__close" onClick={() => setCurrentPost(null)}></button>
      </div>
      <div className="modal-window__img-wrapper">
        <img src={post.url_photo} alt={post.text} className="modal-window__img" />
      </div>
      <div className="modal-window__text-wrapper">
        <p className="modal-window__text">
          <span className="modal-window__text-subtitle">Kira:</span> {post.text}
        </p>
      </div>
      <div className="modal-window__content">
        <div className="social-media">
          <button className="modal-window__button">
            <DisplayLikes likes={post.likes} />
          </button>
          <button className="modal-window__button">
            <DisplayComments commentsNumber={totalComments} />
          </button>
        </div>
        <div className="modal-window-date">{post.date}</div>
      </div>
      <Comments comments={post.comments} />
      <YourComment comments={post.comments} />
    </div>
  );
};

export default ModalWindow;
