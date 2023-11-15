import * as React from 'react';
import CommentChat from '../comment-chat/comment-chat';
import { IComments } from '../../../models/IPosts';

interface CommentType {
  comments: IComments[];
}

const Comments: React.FC<CommentType> = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((item, index) => (
        <div key={index} className="comments__chat">
          <div className="comments__chat-first">
            <CommentChat comment={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
