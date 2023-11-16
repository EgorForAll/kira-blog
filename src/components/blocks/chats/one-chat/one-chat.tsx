import * as React from 'react';
import CommentChat from '../../comment-chat/comment-chat';
import { IComments } from '../../../../models/IPosts';

interface CommentType {
  comment: IComments;
}

const OneChat: React.FC<CommentType> = ({ comment }) => {
  return (
    <>
      <div className="comments__chat-first">
        <CommentChat comment={comment} isSecond={false} />
      </div>
    </>
  );
};

export default OneChat;
