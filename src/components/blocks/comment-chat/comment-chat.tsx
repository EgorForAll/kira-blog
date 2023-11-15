import * as React from 'react';
import { IComments } from '../../../models/IPosts';
import Avatar from '../../svg/avatar/avatar';

interface CommentType {
  comment: IComments;
}

const CommentChat: React.FC<CommentType> = ({ comment }) => {
  return (
    <div className="chat">
      <div className="chat__user">
        <div className="chat__user-img">
          <Avatar />
        </div>
        <div className="chat__user-name">{comment.user}</div>
      </div>
      <div className="chat__message">
        <p className="chat__message-text">{comment.text}</p>
        <button className="chat__button">Ответить</button>
      </div>
    </div>
  );
};

export default CommentChat;
