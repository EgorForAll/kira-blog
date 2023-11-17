import * as React from 'react';
import CommentChat from '../../comment-chat/comment-chat';
import { IComments } from '../../../../models/IPosts';

interface CommentType {
  comment: IComments;
}

const DoubleChat: React.FC<CommentType> = ({ comment }) => {
  return (
    <>
      <div className="comments__chat-first">
        <CommentChat comment={comment} isSecond={false} />
      </div>
      <div className="comments__chat-second">
        {comment.response &&
          comment.response.map((item) => (
            <CommentChat key={item.id} comment={item} isSecond={true} />
          ))}
      </div>
    </>
  );
};

export default DoubleChat;
