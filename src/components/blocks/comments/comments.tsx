import * as React from 'react';
import YourComment from '../your-cooment/your-comment';
import DoubleChat from '../chats/double-chat/double-chat';
import OneChat from '../chats/one-chat/one-chat';
import { IComments } from '../../../models/IPosts';

interface CommentsType {
  comments: IComments[];
}

const Comments: React.FC<CommentsType> = ({ comments }) => {
  return (
    <>
      <div className="comments animate__animated animate__fadeInDown">
        <div className="comments__chat">
          {comments.map((item) =>
            item.response ? (
              <DoubleChat key={item.id} comment={item} />
            ) : (
              <OneChat key={item.id} comment={item} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
